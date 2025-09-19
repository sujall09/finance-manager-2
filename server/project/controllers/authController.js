import pool from "../../db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// Sign up || Create User

export const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    // Check email exists
    const [emailExists] = await pool.query(
        "SELECT * FROM users WHERE email=?",
        [email]
    );

    if (emailExists.length > 0) return res.status(400).json({ message: "Email already exists." });

    // Check username exists 
    const [usernameExists] = await pool.query(
        "SELECT * FROM users WHERE username=?",
        [username]
    );
    if (usernameExists.length > 0) return res.status(400).json({ message: "Username already exists." });

    // Check password length
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    // Hash password + insert user 
    const hashPassword = await bcrypt.hash(password, 10);

    await pool.query(
        "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)",
        [name, username, email, hashPassword]
    )

    res.status(201).json({ message: "User registered successfully" });
}

// Login

export const login = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const [users] = await pool.query(
        "SELECT * FROM users WHERE email=?",
        [email]
    );

    if (!users.length) return res.status(400).json({ message: "User not found" });

    const user = users[0];

    // Password verification
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    // JWT Token Generation

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )

    res.cookie(
        "token",
        token,
        {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        }
    )

    res.json({ message: "Login successful", user: { id: user.id, username: user.username, email: user.email } });
}

// Logout
export const logout = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    });

    return res.json({ message: "Logged out successfully" });
}
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from "../features/authSlice.js"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // for form validation
    const [formErr, setFormErr] = useState({});

    const validate = () => {
        const newErrors = {};

        // Email
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        // Password
        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setFormErr(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setTimeout(() => setFormErr({}), 5000);
        }

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;

        dispatch(loginStart());
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password })
            dispatch(loginSuccess(response.data.user));
            navigate("/dashboard");

        } catch (error) {
            dispatch(loginFailure(error.response.data.message));
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-5">
            <form className="bg-white shadow-md rounded-2xl p-6 sm:p-8p-8 w-full max-w-md" onSubmit={handleLogin}>
                <div className="flex-col flex justify-center items-center">
                    <span className="w-12 h-12 bg-green-100 flex justify-center items-center rounded-xl mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet w-6 h-6 text-green-600" aria-hidden="true">
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg>
                    </span>
                    <h1 className="text-2xl font-semibold text-center mb-6">Welcome back</h1>
                    <p className="mb-3 text-sm text-gray-600">Sign in to your finance manager account</p>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border-neutral-50 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a1a1a1]"
                    />
                    {formErr.email && <p className="text-red-500">{formErr.email}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2 font-medium text-sm">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border-neutral-50 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a1a1a1]"
                    />
                    {formErr.password && <p className="text-red-500">{formErr.password}</p>}
                </div>

                {/* <span>Forgot Password?</span> */}

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors mb-6"
                    disabled={loading}
                >

                    {loading ? "Logging in..." : "Login"}
                </button>

                {error && <p>{error}</p>}

                <span className="text-center text-sm text-gray-600 flex justify-center">
                    Don't have an account? <Link to="/register" className="text text-blue-600 font-semibold hover:text-blue-700 hover:underline"> Sign up</Link>
                </span>
            </form>
        </div>
    );
}


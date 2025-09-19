import express from "express";
import dotenv from "dotenv";
import authRoutes from "./project/routes/authRoutes.js"
import transactionRoutes from "./project/routes/transactionRoutes.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => res.send("Server is running"));
app.listen(port, console.log(`Server running on port ${port}`))
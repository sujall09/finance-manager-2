import express from "express";
import dotenv from "dotenv";
import authRoutes from "./project/routes/authRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Server is running"));
app.listen(port, console.log(`Server running on port ${port}`))
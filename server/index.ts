import "dotenv/config"
import express, { urlencoded } from "express";
import morgan from "morgan"
import connectDB from "./src/config/db";

connectDB()
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(morgan("dev"))
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello, World!"
    })
})

export default app;
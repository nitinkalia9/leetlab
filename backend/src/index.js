import express from "express"
import dotenv, { config } from "dotenv"
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";

dotenv.config();


const app = express();

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello Guys Welcome to leetlab🔥");
});

app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT, ()=> {
    console.log("server is running on port 8080")
});


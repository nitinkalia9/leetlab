import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware";
import { createProblem } from "../controllers/problem.controller";


const problemRoutes = express.Router();

problemRoutes.post("/create-problem", authMiddleware, checkAdmin, createProblem)


problemRoutes.get("/get-all-problems", authMiddleware, getAllProblems)


problemRoutes.get("/get-problems/:id", authMiddleware, getProblemById)



problemRoutes.put("/update-problems/:id", authMiddleware, checkAdmin, updateProblem)


problemRoutes.delete("/delete-problems/:id", authMiddleware, checkAdmin, deleteProblem)


problemRoutes.get("/get-solved-problems", authMiddleware, getAllProblemsSolvedByUser)


export default problemRoutes;
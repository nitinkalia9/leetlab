import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware.js";
import { createProblem, deleteProblem, getAllProblems, getProblemById, updateProblem } from "../controllers/problem.controller.js";


const problemRoutes = express.Router();

problemRoutes.post("/create-problem", authMiddleware, checkAdmin, createProblem)


problemRoutes.get("/get-all-problems", authMiddleware, getAllProblems)


problemRoutes.get("/get-problems/:id", authMiddleware, getProblemById)



problemRoutes.put("/update-problems/:id", authMiddleware, checkAdmin, updateProblem)


problemRoutes.delete("/delete-problems/:id", authMiddleware, checkAdmin, deleteProblem)


problemRoutes.get("/get-solved-problems", authMiddleware, getAllProblemsSolvedByUser)


export default problemRoutes;
import express from "express";
import {getAllExercises, addExercise, getOneExercise, deleteExercise, addInstruction, deleteInstruction} from "../controller/exercise.js";


const router = express.Router();

router.get("/", getAllExercises)
router.get("/:exerciseId", getOneExercise)
router.post("/", addExercise);
router.delete("/:userId/:exerciseId", deleteExercise)
router.post("/:exerciseId/instructions", addInstruction)
router.delete("/:exerciseId/instructions/:instructionId", deleteInstruction)

export default router;
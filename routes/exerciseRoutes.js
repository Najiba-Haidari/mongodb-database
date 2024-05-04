import express from "express";
import {getAllExercises, addExercise, getOneExercise, deleteExercise} from "../controller/exercise.js";


const router = express.Router();

router.get("/", getAllExercises)
router.post("/", addExercise);
router.get("/:id", getOneExercise)
// router.put("/updateUser/:id", updateUser)
router.delete("/:id", deleteExercise)


export default router;
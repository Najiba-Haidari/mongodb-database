import express from "express";
import {getAllExercises, addExercise} from "../controller/exercise.js";


const router = express.Router();

router.get("/", getAllExercises)
// router.get("/users/:id", getOneUser)
router.post("/addExercise", addExercise);
// router.put("/updateUser/:id", updateUser)
// router.delete("/deleteUser/:id", deleteUser)


export default router;
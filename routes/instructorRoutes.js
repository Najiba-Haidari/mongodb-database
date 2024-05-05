import express from "express";
import { getAllInstructors, getOneInstructor, addInstructor, deleteInstructor } from "../controller/instructor.js";


const router = express.Router();

router.get("/", getAllInstructors)
router.get("/:instructorId", getOneInstructor)
router.post("/", addInstructor);
router.delete("/:userId/:instructorId", deleteInstructor)
// router.post("/:instructorId/instructions", addInstruction)
// router.delete("/:instructorId/instructions/:instructionId", deleteInstruction)

export default router;
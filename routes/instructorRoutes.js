import express from "express";
import { getAllInstructors, getOneInstructor, addInstructor, deleteInstructor } from "../controller/instructor.js";


const router = express.Router();

router.get("/", getAllInstructors)
router.post("/", addInstructor);
router.get("/:instructorId", getOneInstructor)
router.delete("/:userId/:instructorId", deleteInstructor)

export default router;
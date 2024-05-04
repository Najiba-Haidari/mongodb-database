import express from "express";
import { getUsers, getOneUser, addUser, updateUser, deleteUser } from "../controller/user.js";


const router = express.Router();

router.get("/", getUsers)
router.get("/:id", getOneUser)
router.post("/addUser", addUser);
router.put("/updateUser/:id", updateUser)
router.delete("/deleteUser/:id", deleteUser)


export default router;
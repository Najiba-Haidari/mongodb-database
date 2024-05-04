import express from "express";
import { getUsers, getOneUser, addUser, updateUser, deleteUser } from "../controller/user.js";


const router = express.Router();

router.get("/", getUsers)
router.get("/:userId", getOneUser)
router.post("/addUser", addUser);
router.put("/updateUser/:userId", updateUser)
router.delete("/deleteUser/:userId", deleteUser)


export default router;
import express from "express";
import { getUsers, getOneUser, addUser, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/addUser", addUser);
router.get("/:userId", getOneUser)
router.put("/updateUser/:userId", updateUser)
router.delete("/deleteUser/:userId", deleteUser)


export default router;
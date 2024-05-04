import express from "express";
import User from "../models/user.js";
// import mongoose from "mongoose";

async function getUsers(req, res) {
    // res.send("allusers")
    try {
        let result = await User.find().limit(10).exec();
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid Result").status(400);
    }
}

async function getOneUser(req, res) {
    // res.send("allusers")
    try {
        let result = await User.findById(req.params.userId);
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid ID").status(400);
    }
}

async function addUser(req, res) {
    try {
        console.log(req.body)
        const result = await User.create({ username: req.body.username, email: req.body.email, password: req.body.password });
        res.send(result)
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(400).send("Error in adding the user: " + error.message);
    }
}

async function updateUser(req, res) {
    try {
        const result = await User.findByIdAndUpdate({_id: req.params.userId}, { username: req.body.username, email: req.body.email, password: req.body.password} , { new: true });
        res.send(result);
    } catch (error) {
        res.send("Error in Updating the User").status(400);
    }
}

async function deleteUser(req, res) {
    try {
        const result = await User.findByIdAndDelete({_id: req.params.userId});
        res.send(result);
    } catch (error) {
        res.send("Error in Deleting the User").status(400);
    }
}



export { getUsers, getOneUser, addUser, updateUser, deleteUser };
import express, { json } from "express";
import Instructor from "../models/instructor.js";
import User from "../models/user.js"
// import mongoose from "mongoose";

async function getAllInstructors(req, res) {
    // res.send("allusers")
    try {
        let result = await Instructor.find().exec()
        // let result = await User.aggregate([
        //     // {$group: {_id: null, totalUsers: {$sum: 1}}},
        //     {$project: {_id: 0, username: 1, email: 1}}
        // ]).populate("exercises").exec();
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid Result").status(400);
    }
}

async function getOneInstructor(req, res) {
    // res.send("allusers")
    try {
        let result = await Instructor.findById(req.params.instructorId);
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid ID").status(400);
    }
}

async function addInstructor(req, res) {
    try {
        console.log(req.body);
        const result = await Instructor.create({
            name: req.body.name,
            userId: req.body.userId
        });
        const instructorData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { instructor: result._id } }
        );

        res.send(result);
    } catch (error) {
        console.error("Error adding exercise:", error);
        res.status(400).send("Error in adding the instructor: " + error.message);
    }
}

async function deleteInstructor(req, res) {
    try {
        const result = await Instructor.findOneAndDelete({ _id: req.params.instructorId });
        const instructorData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { instructor: result._id } },
            { new: true }
        );

        res.send(result);
    } catch (error) {
        res.send("Error in Deleting the User").status(400);
    }
}



export { getAllInstructors, getOneInstructor, addInstructor, deleteInstructor };
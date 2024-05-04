import express, { json } from "express";
import Exercise from "../models/exercise.js";
import User from "../models/user.js";
// import mongoose from "mongoose";

async function getAllExercises(req, res) {
    // res.send("allusers")
    try {
        let result =  await Exercise.find().exec()
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

async function getOneExercise(req, res) {
    // res.send("allusers")
    try {
        let result = await Exercise.findById(req.params.id);
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid ID").status(400);
    }
}

async function addExercise(req, res) {
    try {
        console.log(req.body);
        const result = await Exercise.create({ 
            bodypart: req.body.bodypart, 
            equipment: req.body.equipment, 
            name: req.body.name, 
            target: req.body.target, 
            userId: req.body.userId 
        });
        const exerciseData = await User.findOneAndUpdate(
            { _id: req.body.userId }, 
            { $push: { exercises: result._id } }
        );

        res.send(result);
    } catch (error) {
        console.error("Error adding exercise:", error);
        res.status(400).send("Error in adding the exercise: " + error.message);
    }
}

async function deleteExercise(req, res) {
    try {
        const result = await Exercise.findByIdAndDelete({_id: req.params.id});
        res.send(result);
    } catch (error) {
        res.send("Error in Deleting the User").status(400);
    }
}




export { getAllExercises, addExercise, getOneExercise, deleteExercise};
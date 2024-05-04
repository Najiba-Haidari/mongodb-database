import express, { json } from "express";
import Exercise from "../models/exercise.js";
import User from "../models/user.js";
// import mongoose from "mongoose";

async function getAllExercises(req, res) {
    // res.send("allusers")
    try {
        let result = await Exercise.find().exec()
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
        let result = await Exercise.findById(req.params.exerciseId);
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
        const result = await Exercise.findOneAndDelete({ _id: req.params.exerciseId });
        const exerciseData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $pull: { exercises: result._id } },
            { new: true }
        );

        res.send(result);
    } catch (error) {
        res.send("Error in Deleting the User").status(400);
    }
}

async function addInstruction(req, res) {
    try {
        // console.log(req.body);
        // const result = await Exercise.create({ 
        //     bodypart: req.body.bodypart, 
        //     equipment: req.body.equipment, 
        //     name: req.body.name, 
        //     target: req.body.target, 
        //     userId: req.body.userId 
        // });
        const result = await Exercise.findOneAndUpdate(
            { _id: req.params.exerciseId },
                    // addToSet is a method used to add elements to an array field in a document while ensuring that the elements are unique within that array. If the element to be added already exists in the array, it will not be added again.
            { $addToSet: { instructions: {description: req.body.description, repeat: req.body.repeat}} },
            { new: true, upsert: true }
        );

        res.send(result);
    } catch (error) {
        console.error("Error adding Instruction:", error);
        res.status(400).send("Error in adding the instruction: " + error.message);
    }
}

async function deleteInstruction(req, res) {
    try {
        // console.log(req.body);
        const result = await Exercise.findOneAndUpdate(
            { _id: req.params.exerciseId },
            { $pull: { instructions: {_id: req.params.instructionId}} },
            { new: true, upsert: true }
        );

        res.send(result);
    } catch (error) {
        console.error("Error adding Instruction:", error);
        res.status(400).send("Error in adding the instruction: " + error.message);
    }
}


export { getAllExercises, addExercise, getOneExercise, deleteExercise, addInstruction, deleteInstruction };
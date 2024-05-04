import mongoose from "mongoose";
import instructionSchema from "./instruction.js";

const exerciseSchema = new mongoose.Schema({
    bodypart: {
        type: String,
        required: true,
        unique: true,
    },
    equipment: {
        type: String,
        // required: true,
    },
    name: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        // required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    //instructionSchema is the subdocument of exerciseSchema
    instructions: [instructionSchema],

})

export default mongoose.model("Exercise", exerciseSchema);

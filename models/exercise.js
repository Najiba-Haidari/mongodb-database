import mongoose from "mongoose";

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
    instructions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instruction',
        },
    ],

})

export default mongoose.model("Exercise", exerciseSchema);

import mongoose from "mongoose";

const instructionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    repeat: {
        type: Number,
        // required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})

export default instructionSchema;
//exporting instructionSchema to add as subdocument of exerciseSchema
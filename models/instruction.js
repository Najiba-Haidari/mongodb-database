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
    exerciseId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
})

export default mongoose.model("Instruction", instructionSchema);

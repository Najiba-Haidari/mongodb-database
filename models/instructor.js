import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },

})

export default mongoose.model("Instructor", instructorSchema);



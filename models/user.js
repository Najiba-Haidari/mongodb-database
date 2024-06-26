import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        index: true // index: true is for regular indexes
    },
    email: {
        type: String,
        required: true,
        unique: true, // or index: true , unique: index is for unique indexes
        match: [/.+@.+\..+/, 'Must match an email address!'],
        
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 15
    },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
        },
    ],
    instructor: 
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instructor',
        },],
})

export default mongoose.model("User", userSchema);

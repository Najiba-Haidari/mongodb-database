import express from "express";
import "dotenv/config";

import mongoose from "mongoose";
import User from "./models/user.js";
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use("/users", userRoutes)
app.use("/exercises", exerciseRoutes)

await mongoose.connect(process.env.ATLAS_URI);

app.get('/', (req, res)=> {
  res.send("Hello from lab-319-5")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  
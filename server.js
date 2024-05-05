import express from "express";
import "dotenv/config";

import mongoose from "mongoose";
import User from "./models/user.js";
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js"
import ejs from "ejs";
import path from "path";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use("/users", userRoutes)
app.use("/exercises", exerciseRoutes)
// app.engine("ejs", ejs);
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(path.join(new URL('./public/', import.meta.url).pathname)));


await mongoose.connect(process.env.ATLAS_URI);

app.get('/', (req, res)=> {
  res.send("Hello from lab-319-5")
})

//Middleware for error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  
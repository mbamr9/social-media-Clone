import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import UserRoute from "./routes/Users.js";
// import PostRoute from "./routes/Posts.js"
import AuthRoute from "./routes/Auth.js";



dotenv.config();
const app = express();


mongoose.connect(process.env.ACCESS_KEY, ()=>{
    console.log("DB is connected ")
});


//middleware 

app.use(express.json());
//add security  to requeste hedders 
app.use(helmet())
//add informarion in console 
app.use(morgan("common"))

app.use("/api/auth" , AuthRoute)
app.use("/api/users" ,UserRoute);
// app.use("/api/posts" ,PostRoute);



app.listen(8800, ()=>{
    console.log("you are on port 8800 ")
})
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import helmet from "helmet";
import multer from "multer";
import morgan from "morgan";
import UserRoute from "./routes/Users.js";
import PostRoute from "./routes/Posts.js"
import AuthRoute from "./routes/Auth.js";

import path from 'path'



dotenv.config();
const app = express();


mongoose.connect(process.env.ACCESS_KEY, ()=>{
    console.log("DB is connected ")
});

const __dirname = path.resolve();
app.use("/images" , express.static(path.join(__dirname , "/public/images")))

//middleware 

app.use(express.json());
//add security  to requeste hedders 
app.use(helmet())
//add informarion in console 
app.use(morgan("common"))

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null , "public/images")
    },
    filename: (req,file,cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer(storage);
app.post("/api/upload" , upload.single("file") , async(req , res )=>{
    try {
        return res.status(200).json("file uploaded successfully")
    } catch (err) {
        console.log(err)
    }
}) 

app.use("/api/auth"   ,AuthRoute)
app.use("/api/users"  ,UserRoute);
app.use("/api/posts"  ,PostRoute);



app.listen(8800, ()=>{
    console.log("you are on port 8800 ")
})
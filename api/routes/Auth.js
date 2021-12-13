import express from "express";
import User from "../Models/User.js"
import bcrypt from "bcrypt";
const Router = express.Router();

//regoster 
Router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const Newuser = await new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
           
        })
        //save user and respond 
        const user = await Newuser.save();
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err)
    }
})


//login

Router.post("/login", async (req, res) => {
    try {
        const user =await User.findOne({email: req.body.email })
        !user && res.status(404).send("user not found ")


        const validpassword = await bcrypt.compare(req.body.password , user.password)
        !validpassword && res.status(400).send("wrong password ")
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err)
    }
})



export default Router;

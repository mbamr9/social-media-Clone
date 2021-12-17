import express, { response } from "express";
import Post from "../Models/Post.js";
import User from "../Models/User.js"

const Router = express.Router();
//create post 
Router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})
//update post 

Router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({
                $set: req.body
            })
            res.status(200).json('the post has been updated ')
        } else {
            res.status(403).json("you can update only your post ")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
//delete post
Router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne()
            res.status(200).json('the post has been deleted')
        } else {
            res.status(403).json("you can delete  only your post ")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
//like and dislike post 

Router.put("/:id/like", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('the post has been liked ')

        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("the post has been disliked ")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// get post 
Router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        !post && res.status(403).json("post doest exist ")


        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get timeline post 

Router.get("/timeline/:userId", async (req, res) => {

    try {
        const currnetuser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currnetuser._id });
        const friendPosts = await Promise.all(
            currnetuser.followings.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );

        res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err)
    }
})

//get user all post 

Router.get("/profile/:username", async (req, res) => {

    try {
        const user = await User.findOne({username:req.params.username})
        const userPosts = await Post.find({ userId: user._id });
        res.status(200).json(userPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})


export default Router;

import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


const Feed = ({username}) => {
    const [posts , setPosts] =useState([]);
    const {user} =useContext(AuthContext);
    useEffect(() => {

        const fetchPosts = async ()=>{
            const res =username
           ? await axios.get("/posts/profile/" + username)
           : await axios.get("/posts/timeline/" +user._id);
            setPosts(res.data)
        }
        fetchPosts();
    }, [username ,user._id])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(post=>{
                    return   <Post key ={post._id} post={post} />

                })}
            </div>
        </div>
    )
}

export default Feed

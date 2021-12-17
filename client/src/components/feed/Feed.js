import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Feed = ({username}) => {
    const [posts , setPosts] =useState([]);

    useEffect(() => {

        const fetchPosts = async ()=>{
            const res =username
           ? await axios.get("/posts/profile/" + username)
           : await axios.get("posts/timeline/61b6d658a6239d83110e7c7d" );
            setPosts(res.data)
        }
        fetchPosts();
    }, [username])
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

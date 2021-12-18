import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {format} from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({post}) => {
     const [like , setLike ]= useState(post.likes.length);
     const [liked ,setliked] = useState(false);
     const [user , setUser] = useState({})
     const PF = process.env.REACT_APP_PUBLIC_FOLDER;

     const {user:currentuser} = useContext(AuthContext);
    
     useEffect(() =>{
 
    setliked(post.likes.includes(currentuser._id))

     }, [currentuser._id , post.likes])

     useEffect(() => {

        const fetchUsers = async ()=>{
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUsers();
    }, [post.userId])

    const  likeHandler =()=>{
        try {
            axios.put("/posts/"+post._id+"/like" , {userId:currentuser._id})
        } catch (err) {
            
        }
        setLike(liked ?  like-1 :like+1)
        setliked(!liked)
    }
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                         <img className="postProfileImg" src={user.profilePicture  ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                    </Link>
                       
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopright">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc} </span>
                    <img className="postImg" src={PF+post.img} alt="" />
                </div>
                <div className="posBottom">
                    <div className="postButtomLeft">
                        <img className="likeIcon" src={`${PF}heart.png`} alt=""  onClick={likeHandler}/>
                        <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postButtomRight">
                        <span className="postCommentText"> {post.comment}</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Post

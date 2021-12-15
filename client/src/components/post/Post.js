import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import { useState } from "react";

const Post = ({post}) => {
     const [like , setLike ]= useState(post.like);
     const [liked ,setliked] = useState(false);

    const  likeHandler =()=>{
        setLike(liked ?  like-1 :like+1)
        setliked(!liked)
    }
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">
                            {Users.filter(u => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">
                            {post.date}
                        </span>
                    </div>
                    <div className="postTopright">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc} </span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="posBottom">
                    <div className="postButtomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt=""  onClick={likeHandler}/>
                        <img className="likeIcon" src="/assets/like.png" alt="" onClick={likeHandler} />
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

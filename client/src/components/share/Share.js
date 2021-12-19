import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"


function Share() {

    const {user} = useContext(AuthContext);
    const  PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc  = useRef();

    const [file , setFile] = useState(null)


    const submitHandler = async (e)=>{
        e.preventDefault();
        const newPost ={
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('file' , file )
            data.append("name" , fileName)
            newPost.img = fileName;

            try {
                await axios.post("/upload" , data)
            } catch (error) {
                console.log(error)
            }
        }

        try {
            await axios.post("/posts" , newPost);
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture :PF+"/person/noAvatar.png"} alt="" />
                    <input ref={desc} placeholder={`whats in your mind ${user.username}`} type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <form className="sharebottom" onSubmit={submitHandler}>
                    <div className="shareoptions">
                        <label htmlFor="file" className="shareoption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon " />
                            <span className="shareOptionText">Photo or video</span>
                            <input style={{display:"none"}} type="file" id="file"  accept=".png ,.jpeg ,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
                        <div className="shareoption">
                            <LabelIcon htmlColor="green" className="shareIcon " />
                            <span className="shareOptionText">tag</span>
                        </div>
                        <div className="shareoption">
                            <RoomIcon htmlColor="blue" className="shareIcon " />
                            <span className="shareOptionText">location</span>
                        </div>
                        <div className="shareoption">
                            <InsertEmoticonIcon  htmlColor="goldenrod" className="shareIcon " />
                            <span className="shareOptionText">feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit" >Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share

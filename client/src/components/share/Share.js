import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="whats in your mind " type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon " />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
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
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share

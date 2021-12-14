import Online from "../online/Online"
import "./rightbar.css"
import { Users } from "../../dummyData"
const Rightbar = () => {
    return (
        <div className="rightbar"> 
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>pola Foster</b> and <b> 3 other friends</b> have a brithday today 
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                 {Users.map(user=>{
                     return <Online key={user.id} user={user}/>
                 })} 
                   
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
 
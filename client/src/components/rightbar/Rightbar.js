import Online from "../online/Online"
import "./rightbar.css"
import { Users } from "../../dummyData"
const Rightbar = ({user}) => {
    const HomeRightbar =()=>{
        return(
            <>
            
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
            
            </>
        );
    };

    const ProfileRightbar =() =>{
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
            
            <h4 className="rightbarTitle">
                User Information 
            </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoitem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoitem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoitem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">{user.relationship ===1 ? "single" :user.relationship === 2 ? "cupole" : "nothing"}</span>
                </div>
                <div className="rightbarInfoitem">
                    <span className="rightbarInfoKey"></span>
                    <span className="rightbarInfoValue"></span>
                </div>
            
            </div>

            <h4 className="rightbarTitle"> User friends </h4>

            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/4.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/5.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/6.jpeg`} alt="" />
                    <span className="rightbarFollowingName"> jogn cartert</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar"> 
            <div className="rightBarWrapper">
              {user ? <ProfileRightbar /> :<HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
 
import "./closeFreind.css"

const CloseFriend = ({user}) => {
    return (
        <div>
             <li className="sidbarFriendItem">
                        <img src={user.profilePicture} className="sidebarFriendImg" alt="" />
                        <span className="sidebarFriendnam">
                            {user.username}
                        </span> 
                    </li>
        </div>
    )
}

export default CloseFriend

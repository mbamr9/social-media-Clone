import "./closeFreind.css"

const CloseFriend = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
             <li className="sidbarFriendItem">
                        <img src={PF+user.profilePicture} className="sidebarFriendImg" alt="" />
                        <span className="sidebarFriendnam">
                            {user.username}
                        </span> 
                    </li>
        </div>
    )
}

export default CloseFriend

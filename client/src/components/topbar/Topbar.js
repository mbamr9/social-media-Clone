import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <Link className="logo" to="/">Lamasocial</Link> 
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                 <SearchIcon className="serchbarIcon"/>
                   <input type="text" className="searchInput" placeholder="Search for freind , post or any video" />
                </div>
            </div>
            <div className="topbarRihgt">
                  <div className="topbarLinks">
                      <span className="topbarLink"> HomePage</span>
                      <span className="topbarLink"> Timeline</span>
                      
                  </div>
                  <div className="topbaricons">
                      <div className="topbarIconItem">
                          <PersonIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                      <div className="topbarIconItem">
                          <ChatIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                      <div className="topbarIconItem">
                          <NotificationsIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                  </div>
                  <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
            
        </div>
    )
}

export default Topbar

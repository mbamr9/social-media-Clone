import Topbar from "../../components/topbar/Topbar"
import "./home.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar"



const Home = () => {
    return (
        <>
     <Topbar />
     <div className="homContainer">
       <Sidebar />
       <Feed/>
       <Rightbar/>
     </div>
    </>
    )
}

export default Home
 
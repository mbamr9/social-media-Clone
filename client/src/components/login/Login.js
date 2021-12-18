import { useContext, useRef } from "react";
import "./login.css";
import {LoginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user ,isFetching  , dispatch } =useContext(AuthContext)


    const handleClick=(e)=>{
      e.preventDefault();
     LoginCall({email:email.current.value, password:password.current.value},dispatch )
    }
    console.log(user)
    return (
        <div className="login">
                <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> lamaocial</h3>
                    <span className="loginDesc"> Connet with friends and the world around you  in lamasocial </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input required type="email" placeholder="Email" className="loginInput" ref={email}/>
                        <input required minLength='6' type="password" placeholder="Password" className="loginInput" ref={password}/>
                        <button disabled={isFetching} className="loginButton ">{isFetching? "...Loading ": "Login"} </button>
                        <span className="loginFotgot">Forget Password ?</span>
                        <button className="loginRegisterButton">create new account </button>
                    </form>
                </div>
            </div>
        </div>
        
       
    )
}

export default Login

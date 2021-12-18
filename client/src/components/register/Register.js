import  axios  from "axios";
import { useRef } from "react";
import "./register.css";

import { useNavigate } from 'react-router-dom';
const Register = () => {
     
    const navigate = useNavigate();


    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();


    const handleClick= async(e) =>{
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value){
            password.current.setCusstomValidity("Passwords don't  match! ")
        }else{
            const user ={
                username: username.current.value ,
                password:password.current.value,
                email:email.current.value, 

            }
            try {
                
                 await axios.post("/auth/register" , user)
                 navigate('/login');
                 
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="login">
                <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> lamaocial</h3>
                    <span className="loginDesc"> Connet with friends and the world around  you  in lamasocial </span>
                </div>
                <div className="loginRight" onSubmit={handleClick}>
                    <form className="loginBox">
                        <input required ref={username} placeholder="Username" className="loginInput" />
                        <input required ref={email} placeholder="Email" type="email" className="loginInput" />
                        <input required ref={password} placeholder="Password"minLength="6" type="password" className="loginInput" />
                        <input required ref={passwordAgain} placeholder="PasswordAgain" type="password" className="loginInput" />
                        <button className="loginButton " type="submit"> Sign up</button>
                        
                        <button className="loginRegisterButton"> Log into Account  </button>
                    </form>
                </div>
            </div>
        </div>
        
       
    )
}

export default Register

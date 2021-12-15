import "./login.css";

const Login = () => {
    return (
        <div className="login">
                <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> lamaocial</h3>
                    <span className="loginDesc"> Connet with friends and the world around  you  in lamasocial </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton "> Login</button>
                        <span className="loginFotgot">Forget Password ?</span>
                        <button className="loginRegisterButton">create new account </button>
                    </div>
                </div>
            </div>
        </div>
        
       
    )
}

export default Login

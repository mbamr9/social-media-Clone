import "./register.css";

const Register = () => {
    return (
        <div className="login">
                <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> lamaocial</h3>
                    <span className="loginDesc"> Connet with friends and the world around  you  in lamasocial </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="PasswordAgain" className="loginInput" />
                        <button className="loginButton "> Sign up</button>
                        
                        <button className="loginRegisterButton"> Log into Account  </button>
                    </div>
                </div>
            </div>
        </div>
        
       
    )
}

export default Register

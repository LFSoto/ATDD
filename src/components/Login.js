import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
                // Set initial error values to empty
                setEmailError("")
                setPasswordError("")
        
                // Check if the user has entered both fields correctly
                if ("" === email) {
                    setEmailError("Por favor ingrese su correo")
                    return
                }
        
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                    setEmailError("Por favor ingrese un correo válido")
                    return
                }
        
                if ("" === password) {
                    setPasswordError("Por favor ingrese su contraseña")
                    return
                }
        
                if (password.length < 7) {
                    setPasswordError("La contraseña debe contener al menos 8 caracteres")
                    return
                }
        
                // Authentication calls will be made here...       
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"} data-testid="login-title">
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Ingrese su correo"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} 
                data-testid="login-email-input"/>
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Ingrese su contraseña"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} 
                data-testid="login-pass-input"/>
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
    </div>
}

export default Login
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={handleOpen}
                value={"Iniciar Sesión"} 
                data-testid="login-button"/>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="login-modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" data-testid="login-modal-title">
            Bienvenido
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} data-testid="login-modal-description">
            Usuario inició sesión correctamente.
          </Typography>
        </Box>
      </Modal>

    </div>
}

export default Login
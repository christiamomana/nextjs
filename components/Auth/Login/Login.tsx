import React, { useState } from "react";
import userInfo from'../../../users.json'
import {validateEmail,validatePassword} from '../utils.js'
import Link from "next/link";
import { Button, Grid, Input, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Login = () => {
  const [email, setEmail]= useState("");
  const [userExists, setUserExist]= useState(false);
  const [password, setPassword]= useState("");
  const [messageUser, setMessageUser]= useState("");
 

  const handleLogin = (e:any)=>{
    e.preventDefault()
    console.log("handle login",email,password,userInfo);
    const userExist = userInfo.some(user=>email===user.email)
    
    
    
    if(userExist){
      const correcto = userInfo.find(user=>email===user.email&&password===user.password)
      console.log("correcto",correcto);
      setMessageUser('El usuario o contraseña son incorrectos')
      setUserExist(false)
      if (correcto) {

        // navigate("/home")
        // localStorage.currentUser = JSON.stringify(correcto)
        // setMessageUser('')
      }

    }
    if(!userExist){
      setUserExist(!userExist)
    }


  }
  
  
const handleValidateEmail =(value:any)=>{
  console.log("handle email",value);
  
}


  return (
<Container>

    <form onSubmit={handleLogin}>

          <Typography
          align="center"
          >Iniciar sesión</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2  }}>
      <Grid item xs={12} sm={6} md={6}>

          <Input
           placeholder="Correo electrónico" type="email" 
           onChange={(e) => setEmail(e.target.value)}
           required={true}
           />
           {userExists?<Typography className="error">Usuario no existe</Typography>:''}
           <div className="error">{messageUser}</div>
          </Grid>
      <Grid item xs={12} sm={6} md={6}>

          <Input
            placeholder="Contraseña"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>

          <div className="container-button">
          <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
            >
          Enviar
        </Button>
          </div>
          <Typography 
          align="center"
          paddingTop={10}
          >
            ¿Aún no tienes cuenta? 
            {/* <Link to={"/register"}> Registrate</Link> */}
          </Typography>

          </form>
          </Container>  

  )
};

export default Login;

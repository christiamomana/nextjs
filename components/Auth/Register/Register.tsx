import React, { useState } from "react";
import { validateEmail, validatePassword, validateRePassword } from "../utils";
import { Button, Input, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Register = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorsMsg, setErrorsMsg] = useState({
    email: false,
    password: false,
    rePassword: false,
  });

  const onRegister = (e: any) => {
    e.preventDefault();

    validateEmail(email, setErrorsMsg);
    validatePassword(password, setErrorsMsg);
    validateRePassword(password, rePassword, setErrorsMsg);

    if (errorsMsg.email || errorsMsg.password || errorsMsg.rePassword) {
      return;
    }

    console.log("Guardado con exito");
  };

  return (
    <>
    <form onSubmit={onRegister}>
      <Typography
        align="center"
      >Crear cuenta
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
        <Grid item xs={12} sm={6} md={4}>
          <Input placeholder="Nombre" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Input placeholder="Apellido" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Input
            placeholder="Correo electrónico"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            error={errorsMsg.email}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Input
            placeholder="Contraseña"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorsMsg.password}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Input
            placeholder="Confirmar contraseña"
            type="password"
            required={true}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            error={errorsMsg.rePassword}
          />
        </Grid>
      </Grid>
      <br />
      <div className="container-button">
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </div>
      <Typography className="go-to-register">
        ¿Ya tienes una cuenta?
        {/* <Link to={"/login"}> Iniciar sesión</Link> */}
      </Typography>
      </form>
    </>

  );
};

export default Register;

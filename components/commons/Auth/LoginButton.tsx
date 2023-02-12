import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import { useAppContext } from "src/context/AppContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getProvider } from "./../../../src/utils/initFirebase";
import { useAuth } from "./auth.hook";

export const LoginButton = () => {
  const {
    auth: { user },
  } = useAppContext();
  const { login } = useAuth();

  if (user) {
    return (
      <IconButton sx={{ p: 0 }}>
        <Avatar alt={user.displayName || "User"} src={user.photoURL || ""} />
      </IconButton>
    );
  }

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={() => login()}>
      Iniciar sesión
    </Button>
  );
};

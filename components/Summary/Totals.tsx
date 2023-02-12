import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "src/context/AppContext";
import { formatterCurrency } from "src/utils/utils";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth } from "../commons/Auth/auth.hook";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export const Totals = () => {
  const {
    shoppingCart: { total },
    auth: { user },
  } = useAppContext();
  const { login } = useAuth();

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const goToBuy = () => {
    if (!user) {
      handleOpen();
      return;
    }

    alert("Gracias por comprar");
  };

  const loginAndBuy = async () => {
    await login();
    handleClose();
    goToBuy();
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        endIcon={<>{formatterCurrency(total)}</>}
        onClick={goToBuy}>
        <div>Ir a Pagar</div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Iniciar sesion
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, margin: "10px" }}>
            Para continuar con tu compra inicia sesión
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            onClick={login}>
            Iniciar sesión
          </Button>
        </Box>
      </Modal>
    </>
  );
};

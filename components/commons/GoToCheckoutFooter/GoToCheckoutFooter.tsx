import { Button } from "@mui/material";
import React from "react";
import { Content } from "./GoToCheckoutFooter.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppContext } from "src/context/AppContext";

export const GoToCheckoutFooter = () => {
  const {
    shoppingCart: { products },
  } = useAppContext();
  if (!products?.length) {
    return null;
  }
  return (
    <Content>
      <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartIcon />}>
          Ir a Pagar
        </Button>
      </div>
    </Content>
  );
};

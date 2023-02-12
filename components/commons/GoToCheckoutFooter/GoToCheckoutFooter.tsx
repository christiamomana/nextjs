import { Button } from "@mui/material";
import React from "react";
import { Content } from "./GoToCheckoutFooter.style";
import { useAppContext } from "src/context/AppContext";
import { formatterCurrency } from "src/utils/utils";
import Link from "next/link";

export const GoToCheckoutFooter = () => {
  const {
    shoppingCart: { products, total },
  } = useAppContext();
  if (!products?.length) {
    return null;
  }
  return (
    <Content>
      <div>
        <Link href="/summary">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            endIcon={<>{formatterCurrency(total)}</>}>
            <div>Ir a Pagar</div>
          </Button>
        </Link>
      </div>
    </Content>
  );
};

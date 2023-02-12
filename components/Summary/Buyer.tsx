import { Grid, Typography } from "@mui/material";
import React from "react";

export const Buyer = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid item>
        <Typography>Datos del comprador</Typography>
      </Grid>
    </Grid>
  );
};

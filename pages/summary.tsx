import { Buyer } from "@/components/Summary/Buyer";
import SummaryComponent from "@/components/Summary/Summary";
import { Totals } from "@/components/Summary/Totals";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import React from "react";

export default function Summary() {
  return (
    <>
      <Head>
        <title>Summary</title>
        <meta name="description" content="Resumen de compra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ padding: "20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} sm={6} md={8}>
            <SummaryComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Buyer />
            <Totals />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import { createTheme, Portal, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "../commons/Footer/Footer";
import { GoToCheckoutFooter } from "../commons/GoToCheckoutFooter/GoToCheckoutFooter";
import ResponsiveAppBar from "../commons/ResponsiveAppBar/ResponsiveAppBar";


export default function Layout({ children }: { children: any }) {
  const darkTheme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#28d69c",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: "red",
          containedPrimary: {
            backgroundColor: "#28d69c",
            "&:hover": {
              backgroundColor: "white",
              color: "#28d69c",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <ResponsiveAppBar />
      <main>{children}</main>
      <Portal>
        <GoToCheckoutFooter />
      </Portal>
      <Footer/>

    </ThemeProvider>
  );
}

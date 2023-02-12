import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";
import React from "react";
import { AppContextProvider } from "src/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

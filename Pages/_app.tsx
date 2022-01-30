import "../Assets/Styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import { Header } from "Components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container sx={{ minHeight: "1vh" }}>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;

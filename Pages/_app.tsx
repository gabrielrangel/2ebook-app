import type { AppProps } from "next/app";

import "../Assets/Styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Paper } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Paper elevation={0}>
      <Component {...pageProps} />
    </Paper>
  );
}

export default MyApp;

import Converter from "Components/Converter";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ConverterContextProvider from "../context/converter/converterContext";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Paper className={styles.container}>
      <Head>
        <title>2ebook</title>
        <meta name="description" content="Generate ebook from urls" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConverterContextProvider>
        <Converter />
      </ConverterContextProvider>
    </Paper>
  );
};

export default Home;

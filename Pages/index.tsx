import Converter from "Components/Converter";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../Assets/Styles/Home.module.css";
import { Paper } from "@mui/material";
import ConverterContextProvider from "Services/Context/converter/converterContext";

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

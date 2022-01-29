import Converter from "Components/Converter";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ConverterContextProvider from "../context/converter/converterContext";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>2ebook</title>
        <meta name="description" content="Generate ebook from urls" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConverterContextProvider>
        <Converter />
      </ConverterContextProvider>
    </div>
  );
};

export default Home;

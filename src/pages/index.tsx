import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import React from "react";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div style={{ overflow: "hidden !important" }}>
      <Head>
        <title>Git repo</title>
        <meta name="description" content="Git hub application" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

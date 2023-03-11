import Head from "next/head";
import Image from "next/image";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";
import HomeScreen from "./HomeScreen";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunshine Playschool-Home</title>
        <meta name="description" content="Sunshine Playschool-Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeScreen />
      </div>
    </div>
  );
}

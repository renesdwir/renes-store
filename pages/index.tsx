import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/sections/Navbar";
import MainBanner from "../components/sections/MainBanner";
import TransactionStep from "../components/sections/TransactionStep";
import FeaturedGame from "../components/sections/FeaturedGame";
import Reached from "../components/sections/Reached";
import Story from "../components/sections/Story";
import Footer from "../components/sections/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>RenesStore - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="RenesStore - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://renesStore.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}

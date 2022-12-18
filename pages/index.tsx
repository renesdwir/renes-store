import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/sections/Navbar";
import MainBanner from "../components/sections/MainBanner";
import TransactionStep from "../components/sections/TransactionStep";
import FeaturedGame from "../components/sections/FeaturedGame";
import Reached from "../components/sections/Reached";
import Story from "../components/sections/Story";
import Footer from "../components/sections/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
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

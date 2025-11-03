import Chat from "@/components/Layout/Chat";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import About from "@/components/Section/About";
import Categories from "@/components/Section/Categories";
import Hero from "@/components/Section/Hero";
import Industries from "@/components/Section/Industries";
import OurCertification from "@/components/Section/OurCertiication";
import Products from "@/components/Section/Products";
import SecondForm from "@/components/Section/SecondForm";
import StatisticData from "@/components/Section/StatisticData";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <OurCertification/>
      <Industries/>
      <Products/>
      <Categories/>
      <StatisticData/>
      <SecondForm/>
      <Chat/>
      <Footer/>
    </>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyGrox from "../sections/WhyGrox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyGrox />
      <Footer />
    </>
  );
}
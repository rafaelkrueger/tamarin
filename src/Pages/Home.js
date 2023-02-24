import "../App.css";
import Carousel from "../Components/Carousel";
import Agile from "../Components/Agile.js";
import Section from "../Components/Section";
import Information from "../Components/Information";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Agile />
      <Section />
      <Information />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

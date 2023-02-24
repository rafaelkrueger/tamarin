import "../App.css";
import Contact from "../Components/Contact";
import ServicesC from "../Components/Services";
import Agile from "../Components/Agile";
import Companies from "../Components/Companies";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <Agile />
      {/* <ServicesC /> */}
      <Companies />
      <Contact />
      <Footer />
    </>
  );
}

export default Services;

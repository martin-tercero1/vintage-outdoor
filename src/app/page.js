import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Welcome from "./components/Home/Welcome";
import Services from "./components/Home/Services";
import Gallery from "./components/Home/Gallery";
import Testimonials from "./components/Home/Testimonials";
import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Welcome/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

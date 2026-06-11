import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import BeyondCoding from "./components/BeyondCoding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <>
      <BackgroundEffects />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Profiles />
      <BeyondCoding />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
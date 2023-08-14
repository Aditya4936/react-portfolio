import About from "./comoponets/About";
import Contact from "./comoponets/Contact";
import Exper from "./comoponets/Exper";
import Home from "./comoponets/Home";
import Navbar from "./comoponets/Navbar";
import Project from "./comoponets/Project";
import SocialLinks from "./comoponets/SocialLinks";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Exper/>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

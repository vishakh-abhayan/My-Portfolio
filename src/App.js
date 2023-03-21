import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfoli from "./components/Portfoli";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfoli />
      <SocialLink />
    </div>
  );
}

export default App;

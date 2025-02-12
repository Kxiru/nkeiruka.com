import "./App.css";
import HeroHeader from "./components/HeroHeader";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SkillsCertifications from "./components/SkillsCertifications";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function setDarkModeOnClick() {
    setDarkMode(!darkMode);
    console.log("clicked!");
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-[#e0f2f1] px-10 md:px-20 lg:px-40  dark:bg-[#0f1b1b]">
        <section className="min-h-screen">
          <NavBar darkMode={darkMode} setDarkModeOnClick={setDarkModeOnClick} />
          <HeroHeader />
        </section>
        <AboutMe />
        <SkillsCertifications />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;

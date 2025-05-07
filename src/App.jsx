import "./App.css";
import Header from "./sections/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [activeLink, setIsActiveLink] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handelActive = (link) => {
    setIsActiveLink(link);
  };
  const handelClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="App">
      <div className="max-w-6xl sm:max-w-6xl sm:mx-auto">
        <Header
          handelActive={handelActive}
          setIsActiveLink={setIsActiveLink}
          activeLink={activeLink}
          handelClicked={handelClicked}
          isClicked={isClicked}
          setIsClicked={setIsActiveLink}
        />
        <Home />
        <About/>
        <Projects />
      </div>

      <Contact />
    </div>
  );
}

export default App;

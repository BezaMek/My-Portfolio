import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import { useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";

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
      <About activeLink={activeLink} handelActive={handelActive} />
      <Projects/>  
      </div>

      <Contact />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Deskgirl from "./assets/Deskgirl.png";
import leftArrow from "./assets/leftArrow.svg"
export default function Home({}) {
  const Words = ["A React Developer", "A Technical specialist support"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="m-10 p-2 sm:flex items-center sm:justify-between sm:space-x-10 max-w-4xl mx-auto"
    >
      <div className="px-5">
        <div className="sm:pr-32">
         <span className="text-4xl">React Developer and Technical Specialist Support</span> 
        </div>
        <p className="sm:pr-48 pt-5 text-gray-700 text-sm">I'm an IT professional with one-year experience as a Technical Specialist Support and 
React Developer, skilled in cloud computing and web development. I am excited to
bring forward the skills I have grasped. Always open to new opportunities to expand 
my scope of knowledge.</p>
        <div className="flex mt-10 items-center">
          <a   href="#about" className="text-base text-black ">Read More</a>
          <img src={leftArrow} alt="" className="w-10 pl-2" />
        </div>
      </div>
      <div className="">
        <img src={Deskgirl} alt="" className=""/>
      </div>
    </section>
  );
}

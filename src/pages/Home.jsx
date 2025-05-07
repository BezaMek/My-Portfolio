import { useState, useEffect } from "react";
import Deskgirl from "../assets/Deskgirl.png";
import leftArrow from "../assets/leftArrow.svg";

export default function Home() {
  const Words = [
    "A React Developer",
    "A Technical Specialist Support",
    "A Next.js Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [Words.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              React Developer and{" "}
              <span className="text-blue-600">Technical Specialist</span>
            </h1>
            <div className="h-8">
              <span className="text-xl sm:text-2xl text-gray-600 animate-fade-in">
                {Words[currentIndex]}
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            I'm an IT professional with one-year experience as a Technical
            Specialist Support and React Developer, skilled in cloud computing
            and web development. I am excited to bring forward the skills I have
            grasped. Always open to new opportunities to expand my scope of
            knowledge.
          </p>

          <div className="flex items-center group">
            <a
              href="#about"
              className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              Read More
            </a>
            <img
              src={leftArrow}
              alt="Arrow"
              className="w-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src={Deskgirl}
              alt="Professional Developer"
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3 scale-105 -z-10"></div>
        </div>
      </div>
    </section>
  );
}

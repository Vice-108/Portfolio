import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/weather.png";
import Img2 from "../assets/sorting.png";
import Img3 from "../assets/sketch.png";

const Work = () => {
  return (
    <section id="work" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* txt */}
            <div>
              <h2 className=" h2 leading-tight text-anim">
                My Latest <br />
                Work ...
              </h2>
              <p className="max-w-sm mb-16">
                Displaying personal projects, showcasing my web development skills, including websites and web applications, with focus on delivering creative and simplistic solutions.  
              </p>
              <a href="https://www.github.com/Vice-108" className="btn btn-sm py-5 px-8 ">My Projects</a>
            </div>
            {/* images */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="Weather App"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Weather App</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3-xl text-white">Live on >--> <a href="https://vice-108.github.io/Weather-App/">Here</a>  </span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            {/* image2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="Sorting Algorithm Visualizer"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Sorting Algorithm Visualizer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3-xl text-white">Live on >--> <a href=" https://vice-108.netlify.app/">Here</a></span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="Etch-A-Sketch"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Etch-A-Sketch</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3-xl text-white">Live on >--> <a href="https://vice-108.github.io/Etch-a-Sketch/">Here</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

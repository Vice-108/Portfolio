import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section " ref={ref}>
      <div className="container mx-auto">
        <div className=" lg:gap-y-10 lg:flex lg:flex-row lg:gap-x-20 lg:h-screen lg:items-center">
          {/* {img} */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-pass-through lg:bg-top lg:mb-16 lg:h-[540px] "
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Student and a Full-Stack Developer with no experience YET.
            </h3>
            <p className="mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              velit eaque obcaecati accusantium expedita sit, commodi animi
              neque modi aliquam eligendi veritatis
            </p>
            {/* stats */}
            <div className="flex gap-x-7 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={2} duration={1} />
                  ) : (
                    <CountUp start={2} end={0} duration={1} />
                  )}
                </div>
                {/* year of experience counter */}
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={5} duration={1} />
                  ) : (
                    <CountUp start={5} end={0} duration={1} />
                  )}
                </div>
                {/* project counter */}
                <div className="font-primary text-sm tracking-[2px]">
                  Projects Done
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-sm">Contact me</button>
              <a
                className="text-gradient btn-link"
                href="https://www.github.com/Vice-108"
              >
                My Github Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

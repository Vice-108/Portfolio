import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <section id="home" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {}
          <div className="flex-1  text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              VIKAS <br /><span>KUMAR SINGH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Geek", 2000, "Enthusiast", 2000]}
                speed={50}
                className="text-anim"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:ml-0 "
            >
             <Link to="contact" smooth={true}> <button className="btn btn-sm">Contact Me</button></Link>
              <a
                className="text-gradient btn-link"
                href="https://www.github.com/Vice-108"
              >
                My Github Profile
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:items-center lg:mx-0 lg:max-w-screen-lg"
            >
              <a href="https://www.github.com/Vice-108">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/vikas-kumar-singh-49a96025b/">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/vicemark108">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <Player
              src="https://assets1.lottiefiles.com/private_files/lf30_lp4bdvil.json"
              className="player"
              loop
              autoplay
              style={{ height: '700px', width: '700px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

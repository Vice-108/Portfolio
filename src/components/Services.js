import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-scroll";

const services = [
  {
    name: "UI/UX Design",
    description:
      "I offer custom landing page design and development services to help my future clients (might be YOU) to increase their website traffic.",
    link: "Learn more",
  },
  {
    name: "Website Development",
    description:
      "I offer full-stack web development services, including responsive design, implementation,and deployment. ",
    link: "Learn more",
  },
  {
    name: "Web Application Development",
    description:
      "I have experience developing dynamic and engaging web application using variety of languages and Frameworks.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Student and a Full-Stack Developer, Constantly learning and
              expanding my skillset.
            </h3>
            <Link to="work"  smooth={true}>
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-1">
                        {description}
                      </p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end">
                      <a
                        href="https:www.github.com/Vice-108"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="https:www.github.com/Vice-108"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

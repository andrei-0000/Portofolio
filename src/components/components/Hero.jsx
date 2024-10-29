import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} sm:mt-0 mt-7 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#5a70f0] mr-7" />
          <div className="w-1 sm:h-80 h-60 violet-gradient mr-7" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey! I'm <span className="text-[#5a70f0]">Andrei</span>
          </h1>
          <p className={`${styles.heroSubText} sm:mt-2 mt-4 text-white-100`}>
            I am a Junior Software Engineer & Developer
            <br className="sm:block hidden" /> Welcome to my portofolio!
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary
            mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

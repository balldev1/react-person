import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* { upper elements } */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There,
            <br /> I'm Binjan
          </motion.span>

          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I design beautiful simple
            <br /> things,And I love what i do
          </motion.span>
        </div>

        {/* { person } */}
        <motion.div
        variants={fadeIn("up","tween",0.2,1)}
         className={css.person}>
          <img src="./person.png" alt="" />
        </motion.div>

        {/* { email } */}
        <a className={css.email} href="mailto:zainkeepscode@hotmail.com">
          zainkeepscode@gmail.com
        </a>

        {/* { lower elements } */}
        <div className={css.lowerElements}>
          <motion.div
          variants={fadeIn("right","tween",0.2,1)} 
          className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("left","tween",0.2,1)}
           className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIEDPROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

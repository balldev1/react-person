import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div variants={footerVariants} className={`innerWidth yPadding flexCenter ${css.container}`}>
        {/* {left}} */}
        <div className={css.left}>
          <span className="primaryText">Let's make something <br />amazing together.</span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        {/* {right}} */}
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <span>145 New York, FL 5467, USA</span>
          </div>

          <div className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

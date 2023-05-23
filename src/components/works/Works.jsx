import React from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant2 } from "../../utils/motion";
import { workExp } from "../../utils/data";
import { zoomIn } from "../../utils/motion";



const Works = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >

      <a className="anchor" id="work"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText">My Work Experience</span>
        
        <div className={`flexCenter ${css.experiences}`}>
            {
                workExp.map((exp, i)=>{
                    return (
                        <motion.div
                        variants={textVariant2}
                        key={i}
                        className={`flexCenter ${css.exp} `}>
                            <div className={` ${css.post}`}>
                                <h1>{exp.place}</h1>
                                <p>{exp.tenure}</p>
                            </div>

                            <div className={` ${css.role}`}>
                                <h1>{exp.role}</h1>
                                <p>{exp.detail}</p>
                            </div>
                        </motion.div>
                    )
                })
            }
        
        
        <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
          <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
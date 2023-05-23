import { motion } from 'framer-motion'
import React from 'react'
import css from './People.module.scss'
import { footerVariants,staggerChildren } from "../../utils/motion";
import Slider from 'react-slick';
import { comments, sliderSettings } from "../../utils/data";


const People = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    className={`paddings ${css.wrapper}`}>
        <a href="anchor" id="people"></a>
        <motion.div
        variants={footerVariants}
        className={`yPadding innerWidth ${css.container}`}>
            <div className={` ${css.heading}`}>
                <span className='primaryText'>People talk about us</span>
                <p style={{maginTop: "2rem"}}>I got a job that was in accordance with the salary and field of work</p>
                <p>The process of submitting an appilication was quite cosy</p>
            </div>

            {/* { carousal } */}

            <div className={`yPaddings ${css.comments}`}>
                <Slider 
                {...sliderSettings}
                className={css.slider}
                >
                {
                    comments.map((comments,i)=>{
                        return (
                            <div className={`flexCenter ${css.comment}`}>
                                <img src={comments.img} alt="" />
                                <p>{comments.comment}</p>

                                <div className={css.line}></div>
                                <div className={css.bio}>
                                    <span>{comments.name}</span>
                                    <span>{comments.post}</span>
                                </div>
                            </div>
                        )
                    })
                }  

                </Slider>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default People

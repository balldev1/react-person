import React  from 'react'
import css from './Header.module.scss'
import { BiPhoneCall , BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { headerVariants,getMenuStyles } from '../../utils/motion'
import { useState,useRef,useEffect } from 'react'
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from "../../hooks/useOutsideAlerter"


const Header = () => {

  // {useState}
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow()
  const menuRef = useRef(null)

  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    });

  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={ { once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`
  }
    style={{boxShadow:headerShadow}}
    >
      
      {/* {navbar} */}
      <div className={`flexCenter innerWidth ${css.container}`}>
          <div className={css.name}>
            Binjan
          </div>
          
          <ul 
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
            <li><a href="#experties">Services</a></li>
            <li><a href="#work">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#people">Testimonials</a></li>
            <li className={`flexCenter ${css.phone}`}>
              <p>+001(313)345678</p>
              <BiPhoneCall size={'40px'}/>
            </li>
          </ul>

          {/* { medium and small screens } */}
          
          <div className={css.menuIcon} 
          onClick={()=> setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30} />
          </div>
      </div>

    </motion.div>
  )
}

export default Header

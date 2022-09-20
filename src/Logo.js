import React from 'react';
import "./Logo.css";
import { motion } from "framer-motion";

export default function Logo() {/*
    const [display,setDisplay]=useState(true);
    const inputEl=useRef();
    const onClickLogo1 = () => {
        inputEl.current.style.animation= "3.5s ease-in-out 0s 1 testKeyword";
        setDisplay(display=>!display)
        console.log(1)
      };
    const onClickLogo2 = () => {
        inputEl.current.style.animation= "0.7s ease-in-out 0s 1 testKeyword2";
        setDisplay(display=>!display)
      };
      const animationEnd = () => {
        
        console.log(2)
      };
      */
     const onclicked=()=>{
        window.location.assign('/Main')
     }
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
            <div className='Logo'>
                    <img src='img/hospital.png' alt='Cannot_Found' onClick={onclicked}>
                    </img>
            </div>
        </motion.div>
    );
}
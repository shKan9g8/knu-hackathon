import React from 'react';
import "./Logo.css";
import { motion } from "framer-motion";

export default function Logo() {

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
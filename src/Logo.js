import React from 'react';
import "./Logo.css";
import { motion } from "framer-motion";

export default function Logo() {

     const onclicked=()=>{
        window.location.assign('/Main')
     }
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
            <div class='Logo'>
                    <img src='img/main_logo.png' alt='Cannot_Found' onClick={onclicked}>
                    </img>
            </div>
        </motion.div>
    );
}
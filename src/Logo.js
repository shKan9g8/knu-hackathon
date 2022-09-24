import React from 'react';
import "./Logo.css";
import { motion } from "framer-motion";

export default function Logo() {
    document.body.style.padding=0;
    document.body.style.backgroundColor="white";
     const onclicked=()=>{
        window.location.assign('/Main')
     }
    return ( 
        <div className='divide' onClick={onclicked}>
            <div class='Others-img'>
                    <img src='img/h9.png' alt='Cannot_Found' style= {{"animationDelay": "1s"}}>
                    </img>
                    <img src='img/h10.png' alt='Cannot_Found' style= {{"animationDelay": "2s"}}>
                    </img>
                    <img src='img/h12.png' alt='Cannot_Found' style= {{"animationDelay": "3s"}}>
                    </img>
            </div>
            <div class='Logo-img'>
                    <img src='img/main_logo.png' alt='Cannot_Found'>
                    </img>
            </div>
        </div>
    );
}
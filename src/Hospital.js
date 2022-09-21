import React,{useRef, useState} from 'react';
import "./Hospital.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";
import Map from "./component/Map.js";


export default function Hospital() {

    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container'>
                    <div>
                        Logo & title
                    </div>
                    <div className='selector-container'>
                        Menu
                    </div>
                    <div className='map-container'>
                        <Map/>
                    </div>
                    <div>
                        Text
                    </div>

                </div>
        </motion.div>
    );
} 
import React,{useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Hpdetail.css";
import Information from './component/Information';

export default function Hpdetail() {
    const {id}=useParams();
    var imgurl = `img/${id}.png`
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container'>
                    <div>
                        {id>=1&id<=15?<img src={imgurl} alt='Cannot_Found' ></img>:<>잘못된 출력</>}
                    </div>
                    <div>
                        Text
                    </div>
                    <div className='index-container'>
                        <Information/>
                    </div>

                </div>
        </motion.div>
    );
} 
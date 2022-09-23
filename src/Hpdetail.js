import React,{useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Hpdetail.css";
import Information from './component/Information';
import data from './db/data.json'

export default function Hpdetail() {
    const {id}=useParams();
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container'>
                    <div>
                        {id>=1&id<=15?<img src={"img/h"+id+".png"} alt='Cannot_Found' ></img>:<>잘못된 출력</>}
                    </div>
                    <div>
                        Text
                        { data.hospitals.map((hospital,index)=>{
                            if (hospital.id==id){
                                return(
                                    <li key={index} style={{ whiteSpace: 'pre-wrap'}}>
                                    {hospital.content}
                                    {/*hospital.detail.map((cont)=>cont)*/}
                                    </li>
                                );
                                }
                            }
                        )
                        }
                    </div>
                    <div className='index-container'>
                        <Information hp_id={id}/>
                    </div>

                </div>
        </motion.div>
    );
} 
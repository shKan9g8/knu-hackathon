import React,{useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Hpdetail.css";
import Information from './component/Information';
import data from './db/data.json'
import LogoMenu from './component/LogoMenu';

export default function Hpdetail() {
    document.body.style.padding=0;

    const {id}=useParams();
    return ( 
        <div>
            <LogoMenu></LogoMenu>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container'>
                    <div className='hospital-img'>
                        {id>=1&id<=15?<img src={"img/h"+id+".png"} alt='Cannot_Found' ></img>:<>잘못된 출력</>}
                        <ul>{data.hospitals[id-1].name}</ul>
                    </div>
                    <div>
                        { data.hospitals.map((hospital,index)=>{
                            if (hospital.id==id){
                                return(
                                    <ul key={index} style={{ whiteSpace: 'pre-wrap'}}>
                                    {hospital.content}
                                    {/*hospital.detail.map((cont)=>cont)*/}
                                    </ul>
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
                </div>
    );
} 
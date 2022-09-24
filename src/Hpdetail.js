import React,{useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "./Hpdetail.css";
import Information from './component/Information';
import data from './db/data.json'
export default function Hpdetail() {
    document.body.style.padding=0;
    const {id}=useParams();
    return ( 
                <div className='container'>
                    <div>
                        {id>=1&id<=15?<img className='img-box' src={"img/h"+id+".png"} alt='Cannot_Found' ></img>:<>잘못된 출력</>}
                    </div>
                    <div>
                        <Link to='/main'><button style={{"backgroundColor":"gray"}}>뒤로가기</button></Link>
                        { data.hospitals.map((hospital,index)=>{
                            if (hospital.id==id){
                                return(
                                    <li key={index} style={{ whiteSpace: 'pre-wrap'}}>
                                    <Information hp_id={id}/>
                                    {/*hospital.detail.map((cont)=>cont)*/}
                                    </li>
                                );
                                }
                            }
                        )
                        }
                    </div>

                </div>
    );
} 
import React,{useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "./Hpdetail.css";
import Information from './component/Information';
import LogoMenu from './component/LogoMenu.js';
import data from './db/data.json'
export default function Hpdetail() {
    document.body.style.padding=0;
    const {id}=useParams();

    var ind = data.hospitals[id-1].detail2.contents;
    var length =Object.keys(ind).length;
    
    const [pos,setPos]=useState(0)
    const click=(add)=>{
      if(pos+add>=0&&pos+add<length){
        setPos(pos+add);
      }
      else{
        setPos(pos);
      }
      console.log(pos)
    };

    return ( 
        <>
        <LogoMenu></LogoMenu>
                <div className='container'>
                    <div>
                        {id>=1&id<=15?<img className='img-box' src={"img/h"+id+".png"} alt='Cannot_Found' ></img>:<>잘못된 출력</>}
                    </div>
                    <div style={{"display":"grid","gridTemplateRows":"60% 40%"}}>
                    <div style={{"overflow":"hidden"}}>
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
                    <div>
                        <a href={"#"+(pos)} onClick={()=>click(-1)} className='fixed-button' style={{"left":"10px","top":"100px"}}>
                        <button style={{"backgroundColor":"gray"}}>left</button>
                        </a>
                        <a href={"#"+(pos)} onClick={()=>click(1)} className='fixed-button' style={{"right":"10px","top":"100px"}}>
                        <button style={{"backgroundColor":"gray"}}>right</button>
                        </a>
                    </div>
                    </div>

                </div>
                </>
    );
} 
import React,{useRef, useState} from 'react';
import "./Information.css";
import data from '../db/data.json'
export default function Information({hp_id}) {
  const [pos,setPos]=useState(0)
  const click=(add)=>{
    setPos(pos+add);
  };

    return ( 
        <>
        <div className='flex-container'>
            {
              data.hospitals[hp_id-1].detail2.contents.map((cont,index)=>{
                return <div key={index} className='flex-item'>
                  <li id={index} key={index}>{cont.title}</li>
                  {cont.content}
                </div>
              })  
            }
            <a href={"#"+(pos-1)} onClick={()=>click(-1)} className='fixed-button' style={{"left":"100px","bottom":"50px"}}>
              left
            </a>
            <a href={"#"+(pos+1)} onClick={()=>click(1)} className='fixed-button' style={{"right":"100px","bottom":"50px"}}>
              right
            </a>
        </div>

        </>
    );
} 
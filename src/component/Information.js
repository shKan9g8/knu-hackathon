import React,{useRef, useState} from 'react';
import "./Information.css";
import data from '../db/data.json'
export default function Information({hp_id}) {
  var ind = data.hospitals[hp_id-1].detail2.contents;
  console.log()
  var length =Object.keys(ind).length;
  

  const [pos,setPos]=useState(0)
  const click=(add)=>{
    if(pos+add>=0&&pos+add<length){
      setPos(pos+add);
    }
    else{
      setPos(pos);
    }
  };

    return ( 
        <>
        <div className='flex-container'>
        <div id={-1} className='flex-item' style={{"visibility":"hidden"}}/>
            {
              data.hospitals[hp_id-1].detail2.contents.map((cont,index)=>{
                return <div key={index} className='flex-item'>
                  <li id={index} key={index}>{cont.title}</li>
                  {cont.content}
                </div>
              })  
            }
          <div id={length} className='flex-item' style={{"visibility":"hidden"}}/>
          <div className='flex-item' style={{"visibility":"hidden"}}/>
            
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
import React,{useRef, useState} from 'react';
import "./Information.css";
import data from '../db/data.json'
import { Box } from '@mui/system';
export default function Information({hp_id}) {
  var ind = data.hospitals[hp_id-1].detail2.contents;
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
        <div className='flex-container'>
            {
              data.hospitals[hp_id-1].detail2.contents.map((cont,index)=>{
                return <div key={index} className='flex-item'>
                  <li id={index} key={index}>{cont.title}</li>
                  <Box>{cont.content}</Box>
                </div>
              })  
            }
          <div id={length} className='flex-item' style={{"visibility":"hidden"}}/>
          <div className='flex-item' style={{"visibility":"hidden"}}/>
        </div>
        </>
    );
} 
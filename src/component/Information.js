import React,{useRef, useState} from 'react';
import "./Information.css";
import data from '../db/data.json'
export default function Information({hp_id}) {
    return ( 
        <>
        <div className='flex-container'>
          {
            data.hospitals.map((hospital,index)=>{
              return <div className='flex-item'>{hospital.id}</div>
            })
            }
        </div>

        </>
    );
} 
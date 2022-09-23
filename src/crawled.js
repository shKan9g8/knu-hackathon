import React,{useRef, useState} from 'react';
import "./Crawled.css"
import crawl_data from './db/crawling.json';

export default function Crawled() {
    var [crawled_id,setID]=useState(0);
    var [menu_index,setIndex]=useState(0)

    const set_id=(id)=>{
        setID(id)
    }

    const leftClick=()=>{
        setIndex(menu_index-1<=0?0:menu_index-1)
    }

    const rightClick=()=>{
        setIndex(menu_index+1>10?9:menu_index+1)
    }

    return ( 
                <div className='container'>
                    <div >
                        {crawled_id!=0?<img className='img-item' src={`./img/${crawled_id}.png`} alt='Cannot_Found' ></img>:<></>}
                    </div>
                    <div className='menu-container'>
                        {
                            crawl_data.map((data,index)=>{
                                if(index<((menu_index+1)*6) && index>=(menu_index*6)){
                                    return <div className='menu-item' onClick={()=>set_id(index+1)}>{data.title}</div>
                                }
                            })
                        }
                    <div style={{"display":"flex"}}>
                        <button className='button-item' onClick={leftClick}>left</button>
                        <button className='button-item' onClick={rightClick}>right</button>
                    </div>
                    </div>

                </div>
    );
} 
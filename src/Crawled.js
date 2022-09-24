import { LinearProgress } from '@mui/material';
import React,{useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import "./crawled.css"
import crawl_data from './db/crawling.json';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Crawled() {
    document.body.style.padding=0;
    var [crawled_id,setID]=useState(1);
    var [menu_index,setIndex]=useState(0)

    const set_id=(id)=>{
        setID(id)
    }

    const leftClick=()=>{
        setIndex(menu_index-1<=0?0:menu_index-1)
        setID((menu_index)*6+1)
    }

    const rightClick=()=>{
        setIndex(menu_index+1>9?9:menu_index+1)
        setID((menu_index)*6+1)
    }

    /*
<div className='menu-item' onClick={()=>set_id(index+1)}>{data.title}<br/>
                                    <a href={data.link}>바로가기</a><br/>{data.date}</div>
                                    */
    return ( 
        <div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
            <div class="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Deagu.jpg' style={{ "height": "60px", "width": "260px", "float": "left", "paddingInlineStart": "50px", "paddingInlineEnd": "50px" }} ></img></a></p>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Main_logo.png' style={{ "height": "60px", "width": "60px", "float": "left" }} ></img></a></p>
                <p aligh="right" style={{ height: "59px", "float": "right", "fontSize": "50px", "paddingInline": "50px" }}><a href="http://localhost:3000/Main">대구시민을 위한 공공의료 서비스 </a></p>
            </div>
                <div className='container1'>
                    <div >
                        {crawled_id!=0?<img className='img-item' src={`./img/${crawled_id}.png`} alt='Cannot_Found' ></img>:<></>}
                    </div>
                    <div className='menu-container'>
                        {
                            crawl_data.map((data,index)=>{
                                if(index<((menu_index+1)*6) && index>=(menu_index*6)){
                                    return (
                                        <div>
                                        <Card onClick={()=>set_id(index+1)} sx={{ Width: 275 ,minHeight:220,maxHeight:220}}>
                                        <CardContent>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {data.title}
                                          </Typography>
                                          <Typography sx={{ mb: 0.5 }} color="text.secondary">
                                            {data.date}
                                          </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" href={data.link} >Learn More</Button>
                                        </CardActions>
                                        
                                      </Card>
                                      </div>
                                    )
                                }
                            })
                        }
                    <div style={{"display":"flex"}}>
                        <button className='button-item' onClick={leftClick}>left</button>
                        <button className='button-item' onClick={rightClick}>right</button>
                    </div>
                    <Link to="/main">뒤로가기</Link>
                    </div>
                    
            </div>
            <div class="blank" style={{ "height": "60px", "width": "99vw", "background": "white" }}></div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
        </div>
    );
} 

import React from 'react'
import './PublicHealth.css'
import PHDB from './db/PublicHealth.json'
import { motion } from "framer-motion";
import LogoMenu from './component/LogoMenu';
export default function PublichHealth() {
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "white";
    const clicked=(id)=>{
        if(id==1){
          window.location.assign('/hospital')
        }
        }

    return (
        <div className = "PHBifContainer">
            <LogoMenu></LogoMenu>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
            <div className='animated-txt1' style={{"animationDelay": "1s"}}>
                <img src='img/1001.png' alt='Cannot_Found' style= {{"float":"left","borderRadius":"10%"}}/>
                <br/>
                공공의료란?<br/>{PHDB["summary"]}
            </div>
            <div className='animated-txt2' style={{"animationDelay": "8s"}}>
            <img src='img/1002.png' alt='Cannot_Found' style= {{"float":"right","borderRadius":"10%"}}/>
                <br/>
            {PHDB["content1"]}
            </div>
            <div className='animated-txt2' style={{"animationDelay": "16s"}}>
            <img src='img/1003.png' alt='Cannot_Found' style= {{"float":"left","borderRadius":"10%"}}/>
                <br/>
            {PHDB["content2"]}
            </div>
            <div className='animated-txt1' style={{"animationDelay": "25s"}}>
            <img src='img/1004.png' alt='Cannot_Found' style= {{"float":"right","borderRadius":"10%","minWidth":"600px","minHeight":"600px"}}/>
                <br/>
            {PHDB["WhatIs2"]}
            </div>
            <div className='animated-txt2' style={{"animationDelay": "32s"}}>
            <img src='img/1005.png' alt='Cannot_Found' style= {{"float":"left","maxWidth":"600px","borderRadius":"10%"}}/>
                <br/>
            {PHDB["content3"]}
            </div>
            <div className='animated-txt3' style={{"animationDelay": "40s"}}>
            <img src='img/1006.png' alt='Cannot_Found' style= {{"borderRadius":"10%","minWidth":"400px","float":"left"}}/>
                <br/>
            {PHDB["content4"]}
            <br/>
            <buttons className="w-btn-outline w-btn-yellow-outline" type="button" onClick = {()=>clicked(1)}>
                        바로가기
            </buttons>
            </div>
            </motion.div>
        </div>
        );
}
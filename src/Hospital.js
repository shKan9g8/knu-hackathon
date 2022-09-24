import React, {useState} from 'react';
import "./Hospital.css";
import { motion } from "framer-motion";
import Menu from "./component/Menu.js"
import styled from 'styled-components';
import Map from "./component/Map.js";
import Title from "./component/Title.js";
import { Link } from 'react-router-dom';
export default function Hospital() {
    document.body.style.padding=0;
  const Content = styled.div`
  ${(props) => props.theme.main};
  width: 10%;
  height: 10%;
`;
    const [test,setTest] = useState();
    const dataname = (x) => {
        console.log(x);
        console.log(typeof x);
        setTest(x);
        console.log(test);
    };

    return ( 
        <div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
            <div class="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Deagu.jpg' style={{ "height": "60px", "width": "260px", "float": "left", "paddingInlineStart": "50px", "paddingInlineEnd" : "50px"}} ></img></a></p>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Main_logo.png' style={{ "height": "60px", "width": "60px", "float": "left" }} ></img></a></p>
                <p aligh="right" style={{ height: "59px", "float": "right", "fontSize": "50px", "paddingInline": "50px" }}><a href = "http://localhost:3000/Main">대구시민을 위한 공공의료 서비스 </a></p>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='containers'>
                    <div style={{ "border": "3px solid lightgreen", "border-radius": "2em" }}>
                            <Title test = {test}/>
                        </div>
                    <div className='selector-container' style={{ "border": "3px solid lightgreen", "border-radius" : "2em"}}>
                            <Menu dataname = {dataname}/><br/>
                            {
                            test?
                            <Link to={"/"+test}><buttons className="w-btn-outlines w-btn-gra1" type="button">병원 정보</buttons></Link>
                            :null
                        }<br/>
                            <Link to={'/test'}><buttons className="w-btn-outlines w-btn-gra2" type="button">대구의 소식</buttons></Link>
                        </div>
                    <div className='map-container' style={{ "border": "3px solid lightgreen", "border-radius": "1em" }}>
                            <Map test = {test}/>
                        </div>

                    </div>
                </motion.div>
                <div class="blank" style={{ "height": "60px", "width": "99vw", "background": "white" }}></div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>

            </div>
         );

} 

import React, {useState} from 'react';
import "./Hospital.css";
import { motion } from "framer-motion";
import Menu from "./component/Menu.js"
import styled from 'styled-components';
import Map from "./component/Map.js";
import Title from "./component/Title.js";
import { Link } from 'react-router-dom';
export default function Hospital() {
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
    );
} 

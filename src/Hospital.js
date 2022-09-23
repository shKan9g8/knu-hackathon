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
                    <div>
                        <Title test = {test}/>
                    </div>
                    <div className = 'selector-container'>
                      <Menu dataname = {dataname}/>
                      <Link to={'/'+test}>바로가기 </Link><br/>
                      <Link to={'/test'}>더보기</Link>
                    </div>
                    <div className='map-container'>
                        <Map test = {test}/>
                    </div>

                </div>
        </motion.div>
    );
} 

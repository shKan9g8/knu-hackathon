import React, {useState} from 'react';
import "./Hospital.css";
import { motion } from "framer-motion";
import Menu from "./component/Menu.js"
import styled from 'styled-components';
import Map from "./component/Map.js";
import Title from "./component/Title.js";
export default function Hospital() {
  const Content = styled.div`
  ${(props) => props.theme.main};
  width: 100%;
  height: 100%;
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
                <div className='container'>
                    <div>
                        <Title test = {test}/>
                    </div>
                    <div className = 'selector-container'>
                      <Menu dataname = {dataname}/>
                    </div>
                    <div className='map-container'>
                        <Map test = {test}/>
                    </div>

                </div>
        </motion.div>
    );
} 

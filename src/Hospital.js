import React from 'react';
import "./Hospital.css";
import { motion } from "framer-motion";
import Menu from "./component/Menu.js"
import styled from 'styled-components';
export default function Hospital() {
  const Content = styled.div`
  ${(props) => props.theme.main};
  width: 100%;
  height: 100%;
`;
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container'>
                    <div>
                        Logo & title
                    </div>
                    <div className = 'selector-container'>
                      MENU
                      <Menu />
                    </div>
                    <div className='map-container'>
                        Map
                    </div>
                    {/* <div>
                        {Menu.content && <Content a = {state}>{Menu.selectComponent[Menu.content]}</Content>}
                    </div> */}

                </div>
        </motion.div>
    );
} 
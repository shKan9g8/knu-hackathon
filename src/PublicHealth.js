import React from 'react'
import './PublicHealth.css'
import PHDB from './db/PublicHealth.json'
import LogoMenu from './component/LogoMenu';
export default function PublichHealth() {
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "white";
    return (
        <div className = "PHBifContainer">
            <LogoMenu></LogoMenu>

            <div className="PHcontainer">
                <div style={{ "borderBlock" : "3px solid gray"}}>
                    <text style={{ "font-size": "100px", "font-family": 'wemade' }}>{PHDB["WhatIs"]}</text>
                    <img src={"img/PublicHealth.jpg"} />
                    <p style={{ "font-size": "40px", "padding": "10px", "font-family": 'wemade' }}>{PHDB["summary"]}</p>

                </div>
                <div style={{ "borderBlock": "3px solid gray" }}>
                    <p style={{ "font-size": "25px", "padding": "10px", "font-family": 'nanum'}}>{PHDB["content1"]}</p>
                    <p style={{ "font-size": "25px", "padding": "10px", "font-family": 'nanum' }}>{PHDB["content2"]}</p>
                    <p style={{ "font-size": "40px", "padding": "10px", "font-family": 'nanum' }}>{PHDB["WhatIs2"]}</p>

                    <p style={{ "font-size": "25px", "padding": "10px" }}>{PHDB["content3"]}</p>
                    <p style={{ "font-size": "25px", "padding": "10px" }}>{PHDB["content4"]}</p>
                    <a href = "https://www.ppm.or.kr/"><p style={{ "font-size": "25px", "padding": "10px" }}>https://www.ppm.or.kr/</p></a>


                </div>
                </div>
            <div className="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}></div>
            <div className="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>

        </div>

        )
}
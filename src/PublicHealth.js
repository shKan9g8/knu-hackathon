import React from 'react'
import './PublicHealth.css'
export default function PublichHealth() {
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "white";
    return (
        <div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
            <div class="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Deagu.jpg' style={{ "height": "60px", "width": "260px", "float": "left", "paddingInlineStart": "50px", "paddingInlineEnd": "50px" }} ></img></a></p>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Main_logo.png' style={{ "height": "60px", "width": "60px", "float": "left" }} ></img></a></p>
                <p aligh="right" style={{ height: "59px", "float": "right", "fontSize": "50px", "paddingInline": "50px" }}><a href="http://localhost:3000/Main">대구시민을 위한 공공의료 서비스 </a></p>
            </div>
        </div>

        )
}
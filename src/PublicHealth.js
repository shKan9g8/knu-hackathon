import React from 'react'
import './PublicHealth.css'
import PHDB from './db/PublicHealth.json'
export default function PublichHealth() {
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "white";
    return (
        <div className = "PHBifContainer">
            <div className="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
            <div className="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Deagu.jpg' style={{ "height": "60px", "width": "260px", "float": "left", "paddingInlineStart": "50px", "paddingInlineEnd": "50px" }} ></img></a></p>
                <p align="left"><a href="http://localhost:3000/Main"><img src='img/Main_logo.png' style={{ "height": "60px", "width": "60px", "float": "left" }} ></img></a></p>
                <p aligh="right" style={{ height: "59px", "float": "right", "fontSize": "50px", "paddingInline": "50px" }}><a href="http://localhost:3000/Main">{PHDB["title"]}</a></p>
            </div>

            <div className="PHcontainer">
                <div>
                    <img src={"img/PublicHealth.jpg"} />
                    <p style={{ "font-size": "40px", "padding": "10px" }}>{PHDB["summary"]}</p>

                </div>
                <div>
                </div>
                </div>
            <div className="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}></div>
            <div className="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>

        </div>

        )
}
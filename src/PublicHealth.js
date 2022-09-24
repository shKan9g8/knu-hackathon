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
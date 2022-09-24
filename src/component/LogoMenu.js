import React, { useState } from 'react';
import "./LogoMenu.css"
function LogoMenu({dataname}){
  return (
    <>        
    <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
    <div class="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
    <p aligh="right" className="Logo-title">대구시민을 위한 공공의료 서비스</p>
    </div>
    </>
  );
};

export default LogoMenu;


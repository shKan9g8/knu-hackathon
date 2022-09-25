import React, { useState } from 'react';
import "./LogoMenu.css"
function LogoMenu({dataname}){
  const onclicked=(url)=>{
    window.location.assign(url)
 }
  return (
    <>
          
    <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
    <div class="blank" style={{ "height": "70px", "width": "99vw", "background": "white" }}>
    <div style={{"display":"grid","gridTemplateColumns":"40% 20% 20% 20%","overflow":'hidden'}}>  
      <div><p aligh="right" className="Logo-title">대구시민을 위한 공공의료 서비스</p></div>
      <div className='hyperlink-logo' style={{"backgroundColor":"lightblue"}} onClick={()=>onclicked('/PublicHealth')}>
        공공의료란?
      </div>
      <div className='hyperlink-logo' style={{"backgroundColor":"blue"} } onClick={()=>onclicked('/hospital')}>
        병원 검색
      </div>
      <div className='hyperlink-logo' style={{"backgroundColor":"green"}} onClick={()=>onclicked('/test')}>
        공공의료 정보
      </div>
    </div>
    </div>
    </>
  );
};

export default LogoMenu;


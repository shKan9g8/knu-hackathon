import React, { useState } from 'react';
import styled from 'styled-components';
import database from '../db/data.json';
import './menu.css';
function Menu({dataname}){
  const [content, setContent] = useState();
  const handleClickButton = e => {
    const { id } = e.target;
    setContent(id);
    console.log(id);
    console.log(content);
  };
  dataname(content);

  return (
    <div>
      <Container>
        {database.hospitals.map(data => {
          if(data.id <= 5)
          {
          return (
            <button key={data.id} className="w-btn-outline w-btn-pink-outline" type="button" onClick={handleClickButton} name={data.name} id={data.id} >
              {data.nick}
            </button>
          );
          }
          else if (data.id <= 10 && data.id > 5){
            return(
            <button key={data.id} className="w-btn-outline w-btn-blue-outline" type="button" onClick={handleClickButton} name={data.name} id={data.id}>
            {data.nick}
          </button>
            );
          }
          else if (data.id <= 15 && data.id > 10){
            return(
            <button key={data.id} className="w-btn-outline w-btn-yellow-outline" type="button" onClick={handleClickButton} name={data.name} id={data.id}>
            {data.nick}
          </button>
            );
          }
        })}
      </Container>
      {content && <Content>
        {database.hospitals.map(data => {
          if (data.id == content)
          {
            return (
              <div key={data.id} className = 'txt'>
                {data.content}
                </div>
                );
          }
        })}

      </Content>}
    </div>
  );
};

export default Menu;

const Container = styled.div`
  ${(props) => props.theme.main};
  height: 20vh;
`;


const Content = styled.div`
  ${(props) => props.theme.main};
  margin : auto;
  text-align : center;
  width: 100%;
  height: 100%;
`;

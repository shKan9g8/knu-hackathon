import React, { useState } from 'react';
import styled from 'styled-components';
import database from '../db/data.json';
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
          return (
            <Button onClick={handleClickButton} name={data.name} id={data.id} class = "target">
              {data.id}
            </Button>
          );
        })}
      </Container>
      {content && <Content>
        {database.hospitals.map(data => {
          if (data.id == content)
          {
            return (
              <div>
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

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: #111111;
  background-color: #eeeeee;
  border-radius: 2rem;
`;

const Content = styled.div`
  ${(props) => props.theme.main};
  width: 100%;
  height: 100%;
`;

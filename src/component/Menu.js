import React, { useState } from 'react';
import styled from 'styled-components';
import { H_Data } from './H_Data';
import H5 from './H5.js';
import H4 from './H4.js';
import H3 from './H3.js';
import H2 from './H2.js';
import H1 from './H1.js';
function Menu({dataname}){
  const [content, setContent] = useState();
  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };
  dataname(content);
  const selectComponent = {
    first: <H1 />,
    second: <H2 />,
    third: <H3 />,
    fourth: <H4 />,
    fifth: <H5 />,
  };

  return (
    <div>
      <Container>
        {H_Data.map(data => {
          return (
            <Button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
      </Container>
      {content && <Content>
        {H_Data.map(data => {
          if (data.name == content)
          {
            return (
              <div>
                {data.latitude} {data.longitude}
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
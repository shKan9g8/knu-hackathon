
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import T1 from './T1.js';
import T2 from './T2.js';
import T3 from './T3.js';
import T4 from './T4.js';
import T5 from './T5.js';
function Title({test}){
  console.log(test);
  console.log(typeof test);
  if (test == 'first')
  {
    return (<T1 />);
  }
  else if (test == 'second')
  {
    return (<T2 />);
  }
  else if (test == 'third')
  {
    return (<T3 />);
  }
  else if (test == 'fourth')
  {
    return (<T4 />);
  }
  else if (test == 'fifth')
  {
    return (<T5 />);
  }
};

export default Title;
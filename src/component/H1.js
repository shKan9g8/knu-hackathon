import React from 'react';
import { H_Data } from './H_Data';

const H1 = () => {

    return (
        <div>
            {/* <img src='img/md.jpg' alt='Cannot_Found'></img> */}
            <h1> 1번 </h1>
            <h2>{H_Data[0].latitude}</h2>
            <h2>{H_Data[0].longitude}</h2>
        </div>
    );
};

export default H1;
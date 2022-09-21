import React from 'react';
import { H_Data } from './H_Data';
const H1 = () => {
    return (
        <div>
            <h1> 4번 </h1>
            <h2>{H_Data[3].latitude}</h2>
            <h2>{H_Data[3].longitude}</h2>
        </div>
    );
};

export default H1;
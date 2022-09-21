import React from 'react';
import { H_Data } from './H_Data';
const H1 = () => {
    return (
        <div>
            <h1> 5번 </h1>
            <h2>{H_Data[4].latitude}</h2>
            <h2>{H_Data[4].longitude}</h2>
        </div>
    );
};

export default H1;
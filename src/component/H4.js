import React from 'react';
import { H_Data } from './H_Data';
const H4 = () => {
    const location = {
        latitude : H_Data[1].latitude,
        longitude : H_Data[1].longitude,
    };
    return (
        <div>
            <h1> 4번 </h1>
            <h2>{location.latitude}</h2>
            <h2>{location.longitude}</h2>
        </div>
    );
};

export default H4;
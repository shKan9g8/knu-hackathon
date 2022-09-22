import React from 'react';
import { H_Data } from './H_Data';

const H1 = () => {
    const location = {
        latitude : H_Data[0].latitude,
        longitude : H_Data[0].longitude,
    };
    return (
        <div>
            {/* --<img src='img/md.jpg' alt='Cannot_Found'></img> */}
            <h1> 1번 </h1>
            <h2>{location.latitude}</h2>
            <h2>{location.longitude}</h2>
        </div>
    );
};

export default H1;
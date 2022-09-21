import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };


    const MyMarker = () => {

        return (
            <div>
                <img className='MapIcon' style={{ height: '30px', height: '30px' }} src='img/Map-icon.png'/>
            </div>
        );
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "//" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                
                <MyMarker key={1} lat={11} lng={77} tooltip='hello' />

            </GoogleMapReact>
        </div>
    );
}
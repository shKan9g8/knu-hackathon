import React, { useState, Wrapper } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const MyMarker = ({ onClick }) => {

    const [icon, setIcon] = useState('img/Map-icon.png');
    const [iconWidth, setIconWidth] = useState("30px");
    const [Mlat, setMlat] = useState('35.8662453')
    const [Mlng, setMlng] = useState('128.5975499')

    const changeIcon = () => {
        /*        setIcon('img/hospital.png')*/
        setIconWidth("50px");
    }
    return (
        <img className='MapIcon'
            style={{ height: iconWidth, height: iconWidth }}
            onClick={changeIcon}
            src={icon}
        />
    );
};
export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 35.79835602,
            lng: 128.5502627
        },
        zoom: 11
    };

    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl : false
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "//" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={{ lat: 35.79835602, lng: 128.5502627 }}
                fullscreenControl={false }
                options={defaultMapOptions }
            >
                
                <MyMarker lat={defaultProps.center.lat} lng={defaultProps.center.lng} tooltip='hello' />

            </GoogleMapReact>
        </div>
    );
}
import React, { useState, Wrapper } from "react";
import GoogleMapReact from 'google-map-react';
import database from '../db/data.json'
import mapper from './mapper.css'

const MyMarker = ({ onClick , $hover}) => {


    const [icon, setIcon] = useState('img/Map-icon.png');
    const [iconWidth, setIconWidth] = useState("30px");
    const changeIcon = () => {
        /*        setIcon('img/hospital.png')*/
        setIconWidth("30px");
    }
    return (
        <img className={$hover ? "icon_hover_on":"icon_hover_off" }
            style={{ /*height: iconWidth, height: iconWidth,*/ position: 'absolute', transform: 'translate(-50%,-50%)' }}
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
        fullscreenControl: true,
        zoomControl : true
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "///" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={{ lat: 35.79835602, lng: 128.5502627 }}
                fullscreenControl={false }
                options={defaultMapOptions }
            >
                    {database.hospitals.map((data, key) => {
                        return (
                            <MyMarker key={key} lat={data.lat} lng={data.lng} tooltip='hello' />
                                );
                    } )}
            </GoogleMapReact>
        </div>
    );
}
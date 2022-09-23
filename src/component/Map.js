import React, { useState, Wrapper, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import database from '../db/data.json'
import mapper from './mapper.css'

const MyMarker = ({ onClick, $hover, place }) => { 

    const [icon, setIcon] = useState('img/Map-icon.png');
    const [iconWidth, setIconWidth] = useState("30px");
    const changeIcon = () => {
        setIconWidth("30px");
    }
    if ($hover) { 
        return (
            <div>
                <img className={$hover ? "icon_hover_on" : "icon_hover_off"}
                    style={{ position: 'absolute', transform: 'translate(-50%,-50%)' }}
                    onClick={changeIcon}
                    src={icon}
                />
                {< InfoWindow className="Wrapper" 
                    style={{ position: 'absolute', transform: 'translate(-50%,-90%)' }}
                    place={place} />}

            </div>

        );
    }
    else { 
        return (
            <div>
                <img className={$hover ? "icon_hover_on" : "icon_hover_off"}
                    style={{ position: 'absolute', transform: 'translate(-50%,-50%)' }}
                    onClick={changeIcon}
                    src={icon}
                />

            </div>

        );
    }
};


// InfoWindow component
const InfoWindow = (props) => { 
    const { place } = props;
    const infoWindowStyle = { 
        position : "relative",
        bottom: 170,
        left: "-110px",
        width: 220,
        backgroundColor: "white",
        boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
        padding: 10,
        fontSize: 14,
        zIndex: 100

    };

    return (
        <div style={infoWindowStyle}>
            <div style={{ fontSize: 12 }}>{place.name}</div>
            <div style={{ fontSize: 12 }}>{"------------------------------------------------------------------"}</div>
            <div style={{ fontSize: 10 }}>{place.content }</div>
        </div>
    );
};


export default function SimpleMap({test}) {

    const [N,setN] = useState([35.798,128.55]);

    useEffect(() => {
        if (test)
            setN([database.hospitals[test].lat, database.hospitals[test].lng]);
        else {
            test = 1;
            setN([35.798, 128.55])
        }

    },[test])


//    console.log(database.hospitals[test].lat)


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
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    center={N} 
                    center={N}
                    zoom={13}
                    fullscreenControl={false}
                    options={defaultMapOptions}
                >
                    {database.hospitals.map((data, key) => {
                        return (
                            <MyMarker key={key} lat={data.lat} lng={data.lng} place={data} tooltip='hello' /> 
                        );
                    })}
                </GoogleMapReact>
            </div>
        );
    
}

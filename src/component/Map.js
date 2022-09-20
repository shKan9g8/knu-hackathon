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

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "여기 키 넣으세요" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={10.99835602}
                    lng={77.01502627}
                    text="My Marker"
                />

            </GoogleMapReact>
        </div>
    );
}
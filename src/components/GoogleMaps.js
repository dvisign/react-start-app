import React from 'react'
import { compose, withProps } from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const GoogleMaps = compose(
  withProps({
    googleMapURL:"http://maps.googleapis.com/maps/api/js?key=AIzaSyBzaMQIpYHNiqA3cJ496WunEv3XnLxEYz0&region=KR",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div className="mapArea" />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 37.389571, lng: 126.692393 }}>
    <Marker position={{ lat: 37.389571, lng: 126.692393 }} />
  </GoogleMap>
));

export default GoogleMaps;
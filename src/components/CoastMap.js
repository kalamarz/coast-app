import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import '../styles/coastMap.scss';

const CoastMap = props => (
  <div className="map">
    <Map center={props.center} zoom={12}>
      <Marker anchor={props.center} />
    </Map>
  </div>
)

export default CoastMap
import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


const CoastMap = props => (
  <Map center={props.center} zoom={12} width={600} height={400}>
    <Marker anchor={props.center} />
  </Map>
)

export default CoastMap
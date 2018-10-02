import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

const CoastMap = props => (
  <Map center={props.center} zoom={12} width={600} height={400}>
    <Marker anchor={props.center}/>

    <Overlay anchor={props.center}>
      <img src='pigeon.jpg' width={240} height={158} alt='map' />
    </Overlay>
  </Map>
)

export default CoastMap
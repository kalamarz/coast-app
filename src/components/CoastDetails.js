import React from 'react';
import { connect } from 'react-redux';
import CoastMap from './CoastMap'

const CoastDetails = props => {

   if(!props.details){
     return <p>Select to get started</p>
   }
   const { NameMobileWeb, COUNTY, LATITUDE, LONGITUDE} = props.details
   console.log(props.details)
    return (
      <div>
        <ul>
            <li>Name: {NameMobileWeb}</li>
            <li>{COUNTY}</li> 
        </ul>
      <CoastMap center={[LATITUDE, LONGITUDE]} />
      </div>
    )
  }


function mapStateToProps(state) {
    return {
        details : state.details
    }
}

export default connect(mapStateToProps)(CoastDetails)
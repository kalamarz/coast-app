import React from 'react';
import { connect } from 'react-redux';

const CoastDetails = props => {

   if(!props.details){
     return <p>Select to get started</p>
   }
   const { NameMobileWeb, COUNTY} = props.details
  
    return (
      <div>
        <ul>
            <li>Name: {NameMobileWeb}</li>
            <li>{COUNTY}</li>
        </ul>
      </div>
    )
  }


function mapStateToProps(state) {
    return {
        details : state.details
    }
}

export default connect(mapStateToProps)(CoastDetails)
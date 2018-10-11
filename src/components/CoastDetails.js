import React from 'react';
import { connect } from 'react-redux';
import CoastMap from './CoastMap';
import '../styles/coastDetails.scss';

const CoastDetails = props => {

   if(!props.details){
     return <p className="details__select">Select a coast from the list to get started</p>    
   }
   
   const {  NameMobileWeb, 
            COUNTY, 
            LATITUDE, 
            LONGITUDE, 
            DescriptionMobileWeb,
            BIKE_PATH,
            FEE,
            BOATING,
            CAMPGROUND,
            FISHING,
            PARKING,
            RESTROOMS,
            DOG_FRIENDLY
          } = props.details
   
    return (
      <div className="details">
        <div className="details__headings">
          <h2 className="details__name">{NameMobileWeb}</h2>
          <h3 className="details__county">{COUNTY}</h3>
          <p className="details__description">{DescriptionMobileWeb}</p>
        </div>
        <div className="details__container">
          <ul className="details__list">
            <li className="details__item"><span role="img" aria-label="bike">&#128690;</span>Bike path: {BIKE_PATH}</li>
            <li className="details__item"><span role="img" aria-label="money">&#128176;</span>Fee: {FEE}</li>
            <li className="details__item"><span role="img" aria-label="boat">&#128674;</span>Boating: {BOATING}</li> 
            <li className="details__item"><span role="img" aria-label="campground">&#127957;</span>Campground: {CAMPGROUND}</li>  
            <li className="details__item"><span role="img" aria-label="fishing">&#128031;</span>Fishing: {FISHING}</li> 
            <li className="details__item"><span role="img" aria-label="parking">&#128663;</span>Parking: {PARKING}</li>
            <li className="details__item"><span role="img" aria-label="restrooms">&#128699;</span>Restrooms: {RESTROOMS}</li>
            <li className="details__item"><span role="img" aria-label="dog">&#128054;</span>Dog friendly: {DOG_FRIENDLY}</li>   
          </ul>
        <CoastMap center={[LATITUDE, LONGITUDE]} />
      </div>
      </div>
    )
  }


function mapStateToProps(state) {
    return {
        details : state.details
    }
}

export default connect(mapStateToProps)(CoastDetails)
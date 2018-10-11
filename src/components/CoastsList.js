import React, { Component } from 'react'
import { fetchList } from '../actions';
import { getDetails } from '../actions';
import { connect } from 'react-redux';
import { getFilteredList } from '../selectors/getFilteredList';
import CoastsFilter from './CoastsFilter';
import '../styles/coastsList.scss';

class CoastsList extends Component {

  componentDidMount(){
    this.props.fetchList();
  }
 
  render() {
    return (
      <div className="list">
        <CoastsFilter />
        <ul className="list__places">
        {
          this.props.list.map(coast => {
            return (
              <li 
                className="list__place"
                key={coast.ID}
                onClick={() => this.props.getDetails(coast)}>
                {coast.NameMobileWeb}
              </li>
            ) 
          })
         }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: getFilteredList(state.list, state.filter)
  };
};

export default  connect(mapStateToProps, { fetchList, getDetails})(CoastsList);


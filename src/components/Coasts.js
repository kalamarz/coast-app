import React, { Component } from 'react'
import { fetchList } from '../actions';
import { connect } from 'react-redux';
import { getFilteredList } from '../selectors/getFilteredList';
import CoastsFilter from './CoastsFilter';

class Coasts extends Component {

  componentDidMount(){
      this.props.fetchList()
  }
 
  render() {
    return (
      <div>
        <CoastsFilter />
        <ul>
        {
           this.props.list.map(coast => {
             return (
                <li 
                  key={coast.ID}>
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

export default  connect(mapStateToProps, { fetchList})(Coasts);


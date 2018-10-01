import React from 'react';
import { connect } from "react-redux";
import { filterList } from '../actions'

const CoastsFilter = props => (
  <div>
    <input
        type="text"
        placeholder="Search..."
        value={props.filter}
        onChange={(e) => {
        props.filterList(e.target.value);
        }} />
    </div>
)

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps, { filterList })(CoastsFilter)
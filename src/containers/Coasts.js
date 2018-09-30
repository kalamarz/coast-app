import React, { Component } from 'react'
import { fetchList } from '../actions';
import { connect } from 'react-redux';


class Coasts extends Component {

    componentDidMount(){
        this.props.fetchList()
    }
 
  render() {
    return (
      <div>
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
      list: state.list
    };
  };

export default  connect(mapStateToProps, { fetchList })(Coasts);

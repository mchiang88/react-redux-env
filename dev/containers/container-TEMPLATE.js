import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import action creators here

// component here

function mapStateToProps(state) {
  return {

  };
}

function matchDispatchToProps(dispatch) {
  // bind action creators
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(); // connect component here
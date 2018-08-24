import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from './actionCreators/actionCreators';
import items from './data.json';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getItems(items.items);
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grocery: state.grocery
});

const mapDispatchToProps = dispatch => ({
  getItems: bindActionCreators(ActionCreators.getItems, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

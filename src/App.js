import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from './actionCreators/actionCreators';
import items from './data.json';
import './App.css';

import Header from './components/Header';
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/Cart';

class App extends Component {
  componentDidMount() {
    this.props.getItems(items.items);
  }
  render() {

    let {grocery} = this.props;

    return (
      <div className="App">
        <Header/>
        <main>
          <GroceryList grocery={grocery}/>
          <ShoppingCart cartItems={[]}/>
        </main>
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

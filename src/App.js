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

    let {grocery, shoppingCart, buyItem} = this.props;

    return (
      <div className="App">
        <Header/>
        <main>
          <GroceryList grocery={grocery} buyItem={buyItem}/>
          <ShoppingCart cartItems={shoppingCart}/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grocery: state.grocery,
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch => ({
  getItems: bindActionCreators(ActionCreators.getItems, dispatch),
  buyItem: bindActionCreators(ActionCreators.buyItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

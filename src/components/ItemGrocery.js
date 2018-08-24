import React from 'react';

const Item = props => {
  return (
    <li>
      <p>{props.name}</p>
      <span className="item-list-price">${props.price}</span>
      <span>{props.cal} kCal</span>
      <button className="btn buy-btn" onClick={props.buyItem}>
        Buy
      </button>
      <div>
        <span>{props.items} Items In Stock</span>
      </div>
    </li>
  );
};

export default Item;

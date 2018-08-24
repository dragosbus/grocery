import React from 'react';
import Item from './ItemGrocery';

const GroceryList = props => {
    return(
        <ul className="grocery">
            {props.grocery.map((item, i)=> 
                <Item key={item.name} {...item}/>    
            )}
        </ul>
    );
};

export default GroceryList;
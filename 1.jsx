`//1.write a react component that displays a list of items from an array`
import React from 'react';
const ItemList = ({ items }) => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
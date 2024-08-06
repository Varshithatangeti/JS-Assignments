import React, { memo } from 'react';
const ListItem = memo(({ item }) => {
  return (
    <li key={item.id}>{item.name}</li>
  );
});
const MyList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default MyList;

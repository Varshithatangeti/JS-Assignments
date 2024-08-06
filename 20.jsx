`20.Implement a react component that displays a list of items with virtualization`
import React from 'react';
import { FixedSizeList } from 'react-window';
const VirtualizedList = ({ items, itemSize, itemRenderer }) => {
  return (
    <FixedSizeList
      height={300}
      width={300}
     itemSize={itemSize}
      itemCount={items.length}
      itemData={items}
    >
      {({ index, style }) => (
        <div style={style}>
          {itemRenderer({ item: items[index], index })}
        </div>
      )}
    </FixedSizeList>
  );
};
export default VirtualizedList;

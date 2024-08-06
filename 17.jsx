`17.Implement a react component that displays a list of items with drag and drag functionality`
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const DraggableItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            opacity: snapshot.isDragging ? 0.5 : 1,
          }}
        >
          {item.name}
        </div>
      )}
    </Draggable>
  );
};
const DroppableList = ({ items }) => {
  const [orderedItems, setOrderedItems] = useState(items);

  const handleOnDrop = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.index === destination.index) {
      return;
    }
    const reorderedItems = [...orderedItems];
    const [removed] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removed);
    setOrderedItems(reorderedItems);
  };
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {orderedItems.map((item, index) => (
            <DraggableItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
const App = () => {
  return (
    <DragDropContext onDragEnd={handleOnDrop}>
      <DroppableList items={items} />
    </DragDropContext>
  );
};
export default App;

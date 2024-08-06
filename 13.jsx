`13.Write a react component that display a list of items with filtering and sorting`
import React, { useState } from 'react';
const items = [
  { id: 1, name: 'Item 1', category: 'A' },
  { id: 2, name: 'Item 2', category: 'B' },
];
const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter ? item.category === categoryFilter : true)
  );
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField].localeCompare(b[sortField]);
    } else {
      return b[sortField].localeCompare(a[sortField]);
    }
  });
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
      <select value={sortField} onChange={(e) => handleSort(e.target.value)}>
        <option value="name">Name</option>
        {/* Add more options for other fields */}
      </select>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;

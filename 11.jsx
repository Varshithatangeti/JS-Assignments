`//11.Implement a react component that displays a list of items with infinite scrolling`
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const loadItems = async (page) => {
    try {
      const response = await axios.get(`https://api.example.com/items?page=${page}`);
      setItems((prevItems) => [...prevItems, ...response.data.items]);
      setHasMore(response.data.items.length > 0);
    } catch (error) {
      console.error('Failed to load items:', error);
    }
  };
  const lastItemRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );
  useEffect(() => {
    loadItems(page);
  }, [page]);
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={item.id} ref={index === items.length - 1 ? lastItemRef : null}>
            {item.name}
          </li>
        ))}
      </ul>
      {hasMore && <p>Loading more items...</p>}
    </div>
  );
};
export default InfiniteScroll;
const App = () => (
    <div>
      <h1>Infinite Scroll List</h1>
      <InfiniteScroll />
    </div>
  );
ReactDOM.render(<App />, document.getElementById('root'));

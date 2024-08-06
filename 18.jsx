`18.Create a react component that uses react ref for DOM manipulation`
import React, { useRef, useEffect, useState } from 'react';
function MeasureDiv() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div ref={divRef}>
      {/* Content */}
      <div>Width: {dimensions.width}</div>
      <div>Height: {dimensions.height}</div>
    </div>
  );
}

export default MeasureDiv;

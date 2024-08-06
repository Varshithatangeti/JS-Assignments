`19.Write a react component that implements a tooltip`
import React, { useState, useRef } from 'react';
const Tooltip = ({ children, text, position = 'top' }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => {
    setShowTooltip(true);
  };
  const handleMouseOut = () => {
    setShowTooltip(false);
  };
  return (
    <div
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {showTooltip && (
        <div
          className={`tooltip ${position}`}
          style={{
            top: `${ref.current?.getBoundingClientRect().top + 10}px`,
            left: `${ref.current?.getBoundingClientRect().left}px`,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
export default Tooltip;

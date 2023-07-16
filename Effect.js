
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(prevColor => (prevColor === 'red' ? 'green' : 'red'));
  };

  return (
    <div>
      <div style={{ backgroundColor: color}}>
        <h1>Hello!</h1>
      </div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};




export default App;

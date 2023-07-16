
import { useState } from 'react';
import './App.css';

function App() {
  const [first, setnew]=useState(0)
  const ADd=()=>{
    setnew(first+1)
  }
  return (
    <div>
      <button onClick={ADd}>
        +
      </button>
      <br></br>
      count = {first}
    </div>
  )
}

export default App;

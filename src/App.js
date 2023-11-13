import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [updatedTime, setUpdatedTime] = useState(time);
  const getTime = () => {
    time = new Date().toLocaleTimeString();
    setUpdatedTime(time);
  };
  setInterval(getTime, 1000);
  return (
    <>
      <div className='main'>
        <h1>{updatedTime}</h1>
      </div>
    </>
  );
};

export default App;

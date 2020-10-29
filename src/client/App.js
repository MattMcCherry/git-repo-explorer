import React from 'react';
import './app.css';

const App = () => {
  fetch('./api/test').then(data => data.json()).then(console.log);

  return (
    <span>Hello world!</span>
  );
};

export default App;

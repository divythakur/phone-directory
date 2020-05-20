import React from 'react';
import { render } from '@testing-library/react';
import Header from "./Header"



function App() {
  return (
    <div>
      <Header />
      <button>Add</button>
      <div>
        <span>Name </span><br />
        <span>Phone</span>
      </div>
      </div>
  );
}

export default App;

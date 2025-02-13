import React from 'react';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="App">
      {/* <h1>Scientific Calculator</h1> */}
      <Calculator />
      <p className="developer">
        Author:<span> @notnbhd</span>
      </p>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

// Import Components
import Maps from './FirstComponents/Maps';
import InputFilter from './SecondComponents/InputFilter';
import ButtonFilter from './FirstComponents/ButtonFilter';



function App() {
  return (
    <div className="App">
      <InputFilter />
      <ButtonFilter />
      <Maps />
    </div>
  );
}

export default App;

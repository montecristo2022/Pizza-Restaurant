import React from 'react';
import './App.css';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import pizzaData from '../PizzaData';
import { useState } from 'react';

function App() {
   const [quantity, setQuantity] = useState(0)
  return (
    <div className='container'>
      <Header itemQuantity={quantity} />
      <Main pizzaData={pizzaData} setQuantity={setQuantity} quantity={quantity} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Main />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Gracias por Elegirnos!" addToCart={addToCart} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="¡Gracias por Elegirnos!" addToCart={addToCart} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
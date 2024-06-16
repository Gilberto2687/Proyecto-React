import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Gracias por Elegirnos!" />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="¡Gracias por Elegirnos!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
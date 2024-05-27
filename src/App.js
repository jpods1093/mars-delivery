import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddressProvider } from './context/AddressContext';
import Header from './components/Header';
import AddAddress from './pages/AddAddress';
import EditAddress from './pages/EditAddress';
import './App.css';

function App() {
  return (
    <AddressProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddAddress />} />
          <Route path="/edit" element={<EditAddress />} />
        </Routes>
      </Router>
    </AddressProvider>
  );
}

export default App;

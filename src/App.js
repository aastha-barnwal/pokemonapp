import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UserProfile from './Pages/UserProfile'
import PokemonDetail from './Pages/PokemonDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/auth/:username" element={<UserProfile />}/> 
        <Route exact path="/auth/:username/:pokemonName" element={<PokemonDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;

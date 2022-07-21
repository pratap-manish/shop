import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/products';
import Navbar from './components/navbar';
import Details from './components/details';
import { useState } from 'react';
import  { BrowserRouter ,Routes, Route}from  'react-router-dom';
function App() {

  return (<>
    <Navbar  />
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Products  />}/>
    <Route exact path="/details" element={<Details />}/>
    
    </Routes>
    </BrowserRouter>
    
    </>
  );
}
export default App;

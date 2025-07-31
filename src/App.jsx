import { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Component/Menu';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* <Route
          path="/about"
          element={<About></About>}
        ></Route> */}
        <Route
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          path="/menu"
          element={<Menu></Menu>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

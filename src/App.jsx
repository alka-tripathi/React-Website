import { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          path="/"
          element={<Footer></Footer>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

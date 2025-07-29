import React from 'react';
import { Link } from 'react-router-dom';
import newbanner from '../ImagesAssets/b.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div
        className="headercontainer"
        style={{ backgroundImage: `url(${newbanner})` }}
      >
        <h1>CUSTOMIC LOVES</h1>
        <p>PRODUCT THAT FITS IN YOUR SKIN COLOR</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

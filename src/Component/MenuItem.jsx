import React from 'react';

export default function MenuItem({ image, name, price }) {
  return (
    <div className>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '300px',
          height: '300px',
        }}
      ></div>
      <h1>{name}</h1>
      <p>₹{price}</p>
    </div>
  );
}

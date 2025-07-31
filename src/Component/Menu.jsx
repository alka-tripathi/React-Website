import React from 'react';
import { MenuList } from '../helper/Menulist';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
export default function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menulist">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            price={menuItem.price}
            name={menuItem.name}
          ></MenuItem>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import MenuList from '../Component/Menu';
import MenuItem from '../Component/MenuItem';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <div className="menu">
      <h3 className="menuTitle">Our Menu</h3>
      <div className="menulist">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            ></MenuItem>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header className="container">
      <h3>Math Magicians</h3>
      <nav className={style.navlist}>
        <li className={style.navlink}><NavLink to="/" exact="true">Home</NavLink></li>
        <li className={style.navlink}><NavLink to="/calculator" exact="true">Calculator</NavLink></li>
        <li className={style.navlink}><NavLink to="/quotes" exact="true">Quote</NavLink></li>
      </nav>
    </header>
  );
}
export default Header;

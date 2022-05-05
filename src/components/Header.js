import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header className="container">
      <h3>Math Magicians</h3>
      <nav className={style.navlist}>
        <li className={style.navlink}><NavLink to="/math-magicians" exact="true">Home</NavLink></li>
        <li className={style.navlink}><NavLink to="/math-magicians/calculator" exact="true">Calculator</NavLink></li>
        <li className={style.navlink}><NavLink to="/math-magicians/quotes" exact="true">Quote</NavLink></li>
      </nav>
    </header>
  );
}
export default Header;

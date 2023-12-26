import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/accuser">Личный кабинет респондент</Link></li>
          <li><Link to="/accompany">Личный кабинет компания</Link></li>
          <li><Link to="/survlist">Опросы</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
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
          <li><Link to="/survcreate">Создать опрос</Link></li>
          <li><Link to="/survpass">Пройти опрос</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
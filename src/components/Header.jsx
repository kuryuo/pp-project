import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Вход</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
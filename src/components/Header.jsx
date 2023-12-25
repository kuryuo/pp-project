import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">HomeAll</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
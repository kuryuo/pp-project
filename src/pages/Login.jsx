import React, { useState } from 'react';
import '../styles/auth.css';
import auth from '../images/auth.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // обработка данных формы
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
    <img src={auth} className="plus-image" alt="plus" />
    <form onSubmit={handleSubmit}>
      <label>
        Имя пользователя:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Войти</button>
    </form>
    </div>
  );
}

export default Login;
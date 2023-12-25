import React, { useState } from 'react';
import '../styles/auth.css';
import auth from '../images/auth.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <div className="auth-container">
        <img src={auth} alt="auth" className="auth-image" />
        <form onSubmit={handleSubmit} className="auth-form">
          <h1>Войти</h1>
          <div className='label-container'>
          <label>
            Почта
            <input type="email" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Почта
            <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          </div>
          <button type="submit">Войти</button>
          <p>Нет аккаунта? <a href="/register">Регистрация</a></p>
        </form>
      </div>
    </>
  );
}

export default Login;
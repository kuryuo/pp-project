import React, { useState } from 'react';
import '../styles/auth.css';
import auth from '../images/auth.jpg';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileType, setProfileType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Profile Type: ${profileType}`);
  };

  return (
    <>
      <div className='auth-container'>
        <img src={auth} alt="auth" />
        <form onSubmit={handleSubmit}>
          <h1 className='auth-h1'>Регистрация</h1>
          <div className='label-container'>
          <label>
            Почта
            <input type="email" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Пароль
            <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Тип профиля
          </label>
          <div className="button-container">
            <button type="button" className="reg-button" onClick={() => setProfileType('Респондент')}>Респондент</button>
            <button type="button" className="reg-button" onClick={() => setProfileType('Компания')}>Компания</button>
          </div>
          </div>
          <button type="submit">Зарегистрироваться</button>
          <p className='p-auth'>Уже есть аккаунт?<a href="/login">Вход</a></p> {/* Добавлен текст "Нет аккаунта? Регистрация" */}
        </form>
      </div>
    </>
  );
}

export default Registration;
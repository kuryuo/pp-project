import React, { useState } from 'react';
import '../styles/auth.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // обработка данных формы
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Имя пользователя:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
    </div>
  );
}

export default Registration;
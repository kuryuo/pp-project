import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/account.css';
import Header from '../components/Header';

function UserProfile() {
  // данные из api
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    recommendedSurveys: ['Опрос 1', 'Опрос 2', 'Опрос 3'],
    completedSurveys: ['Опрос 4', 'Опрос 5']
  };

  const logout = () => {
    //удалить токен из localStorage
  };

  return (
    <div className='user-profile'>
         <Header/>
         <div className='user-info'>
            <h3>Личный кабинет</h3>
            <p>Информация о пользователе</p>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link to="/" onClick={logout}>
            <button className='logout'>Выйти</button>
            </Link>
         </div>
        <div className='surveys'>
            <h3>Рекомендуемые опросы</h3>
            <ul className='survey-list'>
                {user.recommendedSurveys.map((survey, index) => (
                <li key={index}>{survey}</li>
                ))}
            </ul>
            <h3>Пройденные опросы</h3>
            <ul className='survey-list'>
                {user.completedSurveys.map((survey, index) => (
                <li key={index}>{survey}</li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default UserProfile;
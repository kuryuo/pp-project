import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/account.css';
import Header from '../components/Header';

function CompanyProfile() {
  // данные из api
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    createdSurveysStats: ['Статистика 1', 'Статистика 2', 'Статистика 3','Опрос 4', 'Опрос 5']
  };

  const logout = () => {
    //удалить токен из localStorage
  };

  return (
    <div className='user-profile'>
         <Header/>
         <div className='user-info'>
            <h3>Личный кабинет</h3>
            <p>Информация о компании</p>
            <p>Название: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link to="/" onClick={logout}>
            <button className='logout'>Выйти</button>
            </Link>
         </div>
        <div className='surveys'>
            <h3>Статистика созданных опросов</h3>
            <ul className='survey-list'>
              {user.createdSurveysStats.map((stat, index) => (
              <li key={index}>{stat}</li>
              ))}
              </ul>
        </div>
    </div>
  );
}

export default CompanyProfile;
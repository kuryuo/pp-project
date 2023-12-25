import React from 'react';
import '../styles/account.css';

function UserProfile() {
  // данные из api
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    recommendedSurveys: ['Опрос 1', 'Опрос 2', 'Опрос 3'],
    completedSurveys: ['Опрос 4', 'Опрос 5']
  };

  //grid 1fr 6fr
  //внутри flex column(для инфы)
  //flex 2 для рекомендуемых
  //flex 3 для пройденных

  return (
    <div className='user-profile'>
      <h2>Личный кабинет</h2>
      <h3>Информация о пользователе</h3>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>Рекомендуемые опросы</h3>
      <ul>
        {user.recommendedSurveys.map((survey, index) => (
          <li key={index}>{survey}</li>
        ))}
      </ul>

      <h3>Пройденные опросы</h3>
      <ul>
        {user.completedSurveys.map((survey, index) => (
          <li key={index}>{survey}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
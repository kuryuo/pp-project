import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import '../styles/account.css';
import Header from '../components/Header';

import edit from '../images/edit.svg';

function UserProfile() {
  const user = {
    id: 1,
    email: 'user1',
    password: null,
    fullName: 'gg',
    sex: 'M',
    dateOfBirth: '2003-08-02',
    educationLevel: 5,
    income: 30000,
    city: 'Москва',
    hobbies: [2,4],
    habits: [3,4],
    role: 2,
    answersList: [],
    makingPurchasesOnline: false,
    recommendedSurveys: ['Опрос 1', 'Опрос 2', 'Опрос 3'],
    completedSurveys: ['Опрос 4', 'Опрос 5']
  };

  const logout = () => {
    //del токен из localStorage
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/users/me/edit', user, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error(response.status, response.statusText);
      }
      // setModalIsOpen(true);
    } catch (error) {
      console.error(error);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [formData, setFormData] = useState({
    fullName: user.fullName,
    educationLevel: user.educationLevel,
    income: user.income,
    city: user.city,
    hobbies: user.hobbies,
    habits: user.habits
  });
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const hobbies = [
    'CarTourism',
    'VideoGames',
    'Golf',
    'CountryHouse',
    'HealthyLifestyle',
    'ArtAndNeedlework',
    'Skiing',
    'SportsActivities',
    'Boats',
    'Horses',
    'Music',
    'Interior',
    'HuntingOrFishing',
    'Cooking',
    'WatchingSports',
    'Journeys',
    'Gardening',
    'Technologies',
    'TourismWithCamping',
    'Photographing',
    'Reading',
    'ExtremeSports',
    'Cars'
  ];
  
  const handleInputChangeHobbies = (event) => {
    const { name } = event.target;
    setFormData(prevState => ({
      ...prevState,
      hobbies: {
        ...prevState.hobbies,
        [name]: !prevState.hobbies[name]
      }
    }));
  };
  
  const habits = [
    'BuyingFood',
    'BuyingClothesAndShoes',
    'VisitingRestaurantsAndCafes',
    'TravelAndVacations',
    'PurchaseOfHouseholdAppliances',
    'AttendingSportsEvents',
    'PurchaseOfCosmetics',
    'BuyingBooksAndMusic',
    'VisitingCinemasAndTheaters',
    'BuyingHouseholdGoods'
  ];

  const handleInputChangeHabits = (event) => {
    const { name } = event.target;
    setFormData(prevState => ({
      ...prevState,
      habits: {
        ...prevState.habits,
        [name]: !prevState.habits[name]
      }
    }));
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/users/me', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    closeModal();
  };

  return (
    <div className='user-profile'>
        <Header/>
        <div className='user-info'>
          <div className='user-edit'>
            <h3>Личный кабинет 
            <img src={edit} alt='Редактировать' className='edit' onClick={handleEditClick}/> 
            </h3>
          </div>
            <p>Имя: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Пол: {user.sex === 'M' ? 'Мужской' : 'Женский'}</p>
            <p>Дата рождения: {new Date(user.dateOfBirth).toISOString().split('T')[0]}</p>
            <p>Уровень образования: {
                [
                    'Нет образования',
                    'Начальное образование',
                    'Основное общее образование',
                    'Среднее общее образование',
                    'Среднее профессиональное образование',
                    'Незаконченное высшее',
                    'Высшее образование (бакалавриат/специалитет)',
                    'Высшее образование (магистратура)',
                    'Высшее образование (аспирантура)'
                ][user.educationLevel]
            }</p>
            <p>Доход: {user.income}</p>
            <p>Город: {
                [
                    'Москва',
                    'Санкт-Петербург',
                    'Казань',
                    'Екатеринбург',
                    'Новосибирск',
                    'Красноярск',
                    'Ростов-на-Дону',
                    'Челябинск',
                    'Уфа',
                    'Самара',
                    'Омск',
                    'Воронеж',
                    'Иркутск',
                    'Волгоград',
                    'Краснодар',
                    'Нижний Новгород',
                    'Кемерово',
                    'Тюмень',
                    'Барнаул',
                    'Томск',
                    'Курск',
                    'Астрахань',
                    'Пенза',
                    'Липецк',
                    'Киров',
                    'Ярославль',
                    'Другое'
                ].includes(user.city) ? user.city : 'Неизвестный город'
            }</p>
            <p>Часто ли совершает покупки: {user.makingPurchasesOnline ? 'Да' : 'Нет'}</p>
            <p>Роль: {
                [
                    'User',
                    'Interviewer',
                    'CompanyOwner',
                    'Admin'
                ][user.role]
            }</p>
            <p>Хобби: {
                user.hobbies.map(hobbyIndex => [
                    'CarTourism',
                    'VideoGames',
                    'Golf',
                    'CountryHouse',
                    'HealthyLifestyle',
                    'ArtAndNeedlework',
                    'Skiing',
                    'SportsActivities',
                    'Boats',
                    'Horses',
                    'Music',
                    'Interior',
                    'HuntingOrFishing',
                    'Cooking',
                    'WatchingSports',
                    'Journeys',
                    'Gardening',
                    'Technologies',
                    'TourismWithCamping',
                    'Photographing',
                    'Reading',
                    'ExtremeSports',
                    'Cars'
                ][hobbyIndex]).join(', ')
            }</p>
            <p>Привычки: {
                user.habits.map(habitIndex => [
                    'BuyingFood',
                    'BuyingClothesAndShoes',
                    'VisitingRestaurantsAndCafes',
                    'TravelAndVacations',
                    'PurchaseOfHouseholdAppliances',
                    'AttendingSportsEvents',
                    'PurchaseOfCosmetics',
                    'BuyingBooksAndMusic',
                    'VisitingCinemasAndTheaters',
                    'BuyingHouseholdGoods'
                ][habitIndex]).join(', ')
            }</p>
<p>Покупки: {user.makingPurchasesOnline ? 'Онлайн' : 'Лично'}</p>
        <Link to="/" onClick={logout}>
          <button className='logout'>Выйти</button>
        </Link>
      </div>
      <Modal
  className={"modal"}
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Редактирование профиля"
>
  <form onSubmit={handleFormSubmit}>
    <label>
      Имя:
      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
    </label>
    <label>
      Уровень образования:
      <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange}>
        <option value="Нет образования">Нет образования</option>
        <option value="Начальное образование">Начальное образование</option>
        <option value="Основное общее образование">Основное общее образование</option>
        <option value="Среднее общее образование">Среднее общее образование</option>
        <option value="Среднее профессиональное образование">Среднее профессиональное образование</option>
        <option value="Незаконченное высшее">Незаконченное высшее</option>
        <option value="Высшее образование (бакалавриат/специалитет)">Высшее образование (бакалавриат/специалитет)</option>
        <option value="Высшее образование (магистратура)">Высшее образование (магистратура)</option>
        <option value="Высшее образование (аспирантура)">Высшее образование (аспирантура)</option>
      </select>
    </label>
    <label>
      Доход:
      <input type="number" name="income" value={formData.income} onChange={handleInputChange} />
    </label>
    <label>
      Город:
      <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
    </label>
    <label>
      Хобби:
      {hobbies.map(hobby => (
        <div key={hobby}>
          <input
            type="checkbox"
            name={hobby}
            checked={!!formData.hobbies[hobby]}
            onChange={handleInputChangeHobbies}
          />
          {hobby}
        </div>
      ))}
    </label>
    <label>
      Привычки:
      {habits.map(habit => (
        <div key={habit}>
          <input
            type="checkbox"
            name={habit}
            checked={!!formData.habits[habit]}
            onChange={handleInputChangeHabits}
          />
          {habit}
        </div>
      ))}
    </label>
    <button className="save" type="submit">Сохранить</button>
  </form>
</Modal>

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

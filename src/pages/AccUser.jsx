import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import '../styles/account.css';
import Header from '../components/Header';

import edit from '../images/edit.svg';

function UserProfile() {
  const [user, setUser] = useState({
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
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error(response.status, response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserData();
  }, []);

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
        await getUserData(token);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    setModalIsOpen(true);
  };
  
  const getUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };


  



  const navigate = useNavigate();

  const handleCreateCompany = async () => {
    const companyData = {
      name: "КоМпАнИя Ура!!!!"
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/company', companyData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        navigate('/accCompany');
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };







  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const hobbiesList = [
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

  const habitsList = [
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
  
  <label>
    Хобби:
    {hobbiesList.map((hobby, index) => (
      <div key={index}>
        <input
          type="checkbox"
          checked={user.hobbies.includes(index)}
          onChange={e => {
            if (e.target.checked) {
              setUser({...user, hobbies: [...user.hobbies, index]});
            } else {
              setUser({...user, hobbies: user.hobbies.filter(hobbyIndex => hobbyIndex !== index)});
            }
          }}
        />
        {hobby}
      </div>
    ))}
  </label>






  return (
    <div className='user-profile'>
      <Header/>
        <div className='user-info'>
          <div className='user-edit'>
            <h3>Личный кабинет 
            <img src={edit} alt='Редактировать' className='edit' onClick={openModal}/> 
            </h3>
          </div>
            <p>Email: {user.email}</p>
            <p>Пароль: {user.password}</p>
            <p>ФИО: {user.fullName}</p>
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
            <p>Роль: {
                [
                    'User',
                    'Interviewer',
                    'CompanyOwner',
                    'Admin'
                ][user.role]
            }</p>
            <p>Покупки: {user.makingPurchasesOnline ? 'Онлайн' : 'Лично'}</p>
            <button className='logout'>Выйти</button>
            <button onClick={handleCreateCompany}>Создать компанию</button>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={"modal"}
            contentLabel="Редактирование профиля"
          >
            <form>
              <label>
                ФИО:
                <input type="text" value={user.fullName} onChange={e => setUser({...user, fullName: e.target.value})} />
              </label>
              <label>
                Уровень образования:
                <select value={user.educationLevel} onChange={e => setUser({...user, educationLevel: e.target.value})}>
                  <option value={0}>Нет образования</option>
                  <option value={1}>Начальное образование</option>
                  <option value={2}>Основное общее образование</option>
                  <option value={3}>Среднее общее образование</option>
                  <option value={4}>Среднее профессиональное образование</option>
                  <option value={5}>Незаконченное высшее</option>
                  <option value={6}>Высшее образование (бакалавриат/специалитет)</option>
                  <option value={7}>Высшее образование (магистратура)</option>
                  <option value={8}>Высшее образование (аспирантура)</option>
                </select>
              </label>
              <label>
                Доход:
                <input type="text" value={user.income} onChange={e => setUser({...user, income: e.target.value})} />
              </label>
              <label>
                Город:
                <input type="text" value={user.city} onChange={e => setUser({...user, city: e.target.value})} />
              </label>
              <label>
                Хобби:
                {hobbiesList.map((hobby, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={user.hobbies.includes(index)}
                      onChange={e => {
                        if (e.target.checked) {
                          setUser({...user, hobbies: [...user.hobbies, index]});
                        } else {
                          setUser({...user, hobbies: user.hobbies.filter(hobbyIndex => hobbyIndex !== index)});
                        }
                      }}
                    />
                    {hobby}
                  </div>
                ))}
              </label>
              <label>
                Привычки:
                {habitsList.map((habit, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={user.habits.includes(index)}
                      onChange={e => {
                        if (e.target.checked) {
                          setUser({...user, habits: [...user.habits, index]});
                        } else {
                          setUser({...user, habits: user.habits.filter(habitIndex => habitIndex !== index)});
                        }
                      }}
                    />
                    {habit}
                  </div>
                ))}
              </label>
              <button type="submit" onClick={handleEditClick}>Сохранить</button>
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
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
    fullName: 'gg',
    sex: 'M',
    dateOfBirth: '2003-08-02',
    educationLevel: 5,
    income: 30000,
    city: 'Москва',
    hobbies: ["VideoGames"],
    restaurantVisitsPerWeek: 1,
    habits: ["BuyingFood","VisitingCinemasAndTheaters"],
    role: 2,
    answersList: [],
    isMakingPurchasesOnline: false,
    recommendedSurveys: ['Опрос 1', 'Опрос 2', 'Опрос 3'],
  });

  //   {
//     "id": 1,
//     "email": "gg@gg.gg",
//     "fullName": null,
//     "sex": null,
//     "dateOfBirth": null,
//     "educationLevel": null,
//     "income": null,
//     "city": null,
//     "hobbies": [],
//     "restaurantVisitsPerWeek": null,
//     "habits": [],
//     "isMakingPurchasesOnline": null,
//     "role": "User",
//     "answersList": []
// }

  useEffect(() => {
    getUserData(localStorage.getItem('token'));
  }, []); 

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        setUser({...user, ...response.data});
        //console.log(user);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');

  const handleCreateCompany = async () => {
    const companyData = {
      name: companyName
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/company', companyData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        navigate('/accompany'); 
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

  const hobbiesList = {
    'CarTourism': 'Автотуризм',
    'VideoGames': 'Видеоигры',
    'Golf': 'Гольф',
    'CountryHouse': 'Дача',
    'HealthyLifestyle': 'Здоровый образ жизни',
    'ArtAndNeedlework': 'Искусство и рукоделие',
    'Skiing': 'Лыжи',
    'SportsActivities': 'Спортивные мероприятия',
    'Boats': 'Лодки',
    'Horses': 'Лошади',
    'Music': 'Музыка',
    'Interior': 'Интерьер',
    'HuntingOrFishing': 'Охота или рыбалка',
    'Cooking': 'Готовка',
    'WatchingSports': 'Смотреть спорт',
    'Journeys': 'Путешествия',
    'Gardening': 'Садоводство',
    'Technologies': 'Технологии',
    'TourismWithCamping': 'Туризм c кемпингом',
    'Photographing': 'Фотография',
    'Reading':'Чтение',
    'ExtremeSports':'Экстримальный спорт',
    'Cars':'Машины'
  };

  const habitsList = {
    'BuyingFood': 'Покупка еды',
    'BuyingClothesAndShoes': 'Покупка одежды и обуви',
    'VisitingRestaurantsAndCafes': 'Посещение ресторанов и кафе',
    'TravelAndVacations': 'Путешествия и отпуск',
    'PurchaseOfHouseholdAppliances': 'Покупка бытовой техники',
    'AttendingSportsEvents': 'Посещение спортивных мероприятий',
    'PurchaseOfCosmetics': 'Покупка косметики',
    'BuyingBooksAndMusic': 'Покупка книг и музыки',
    'VisitingCinemasAndTheaters': 'Посещение кинотеатров и театров',
    'BuyingHouseholdGoods': 'Покупка товаров для дома'
  };

  const educationLevels = [
    "Нет образования",
    "Начальное образование",
    "Основное общее образование",
    "Среднее общее образование",
    "Среднее профессиональное образование",
    "Незаконченное высшее",
    "Высшее образование (бакалавриат/специалитет)",
    "Высшее образование (магистратура)",
    "Высшее образование (аспирантура)"
  ];

return (
  <div className='user-profile'>
    <Header/>
      <div className='user-info'>
        <div className='user-edit'>
          <h3>Личный кабинет 
          <img src={edit} alt='Редактировать' className='edit' onClick={openModal}/> 
          </h3>
        </div>
          <p>Email: {user?.email}</p>
          <p>ФИО: {user?.fullName}</p>
          <p>Пол: {user?.sex === 'M' ? 'Мужской' : 'Женский'}</p>
          <p>Дата рождения: {user?.dateOfBirth && new Date(user.dateOfBirth).toISOString().split('T')[0]}</p>
          <p>Уровень образования: {
              user?.educationLevel && educationLevels[user.educationLevel]
          }</p>
          <p>Доход: {user?.income}</p>
          <p>Город: {
              user?.city && [
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
              user?.hobbies && user.hobbies.map(hobbyEng => hobbiesList[hobbyEng]).join(', ')
          }</p>
          <p>Посещение ресторанов и кафе: {user?.restaurantVisitsPerWeek}</p>
          <p>Привычки: {
              user?.habits && user.habits.map(habitEng => habitsList[habitEng]).join(', ')
          }</p>
          <p>Покупки: {user?.isMakingPurchasesOnline ? 'Онлайн' : 'Лично'}</p>
              <div>
                <button className='logout' onClick={handleLogout}>Выйти</button>
              </div>
              <div>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Введите название компании" />
          <button onClick={handleCreateCompany}>Создать компанию</button>
              </div>
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
                <input type="text" value={user?.fullName} onChange={e => setUser({...user, fullName: e.target.value})} />
              </label>
              <label>
                Пол:
                <div>
                  <label>
                    <input
                      type="radio"
                      value="M"
                      checked={user?.sex === 'M'}
                      onChange={e => setUser({...user, sex: e.target.value})}
                    />
                    Мужской              
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="F"
                      checked={user?.sex === 'F'}
                      onChange={e => setUser({...user, sex: e.target.value})}
                    />
                    Женский
                  </label>
                </div>
              </label>
              <label>
                Дата рождения:
                <input
                  type="date"
                  value={user?.dateOfBirth}
                  onChange={e => setUser({...user, dateOfBirth: e.target.value})}
                />
              </label>
              <label>
                Уровень образования:
                <select value={user?.educationLevel} onChange={e => setUser({...user, educationLevel: Number(e.target.value)})}>
                  {educationLevels.map((level, index) => (
                    <option key={index} value={index}>{level}</option>
                  ))}
                </select>
              </label>
              <label>
                Доход:
                <input type="text" value={user?.income} onChange={e => setUser({...user, income: Number(e.target.value)})} />
              </label>
              <label>
                Город:
                <select value={user?.city} onChange={e => setUser({...user, city: e.target.value})}>
                  <option value="">Выберите город</option>
                  {[
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
                  ].map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Хобби:
                {Object.entries(hobbiesList).map(([key, hobby], index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={user?.hobbies?.includes(key)}
                      onChange={e => {
                        if (e.target.checked) {
                          setUser({...user, hobbies: [...user?.hobbies, key]});
                        } else {
                          setUser({...user, hobbies: user?.hobbies?.filter(hobbyItem => hobbyItem !== key)});
                        }
                      }}
                    />
                    {hobby}
                  </div>
                ))}
              </label>    
              <label>
                Посещение ресторанов и кафе:
                <input
                  type="text"
                  value={user?.restaurantVisitsPerWeek}
                  onChange={e => setUser({...user, restaurantVisitsPerWeek: Number(e.target.value)})}/>
              </label>         
              <label>
                Привычки:
                {Object.entries(habitsList).map(([key, habit], index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={user?.habits?.includes(key)}
                      onChange={e => {
                        if (e.target.checked) {
                          setUser({...user, habits: [...user?.habits, key]});
                        } else {
                          setUser({...user, habits: user?.habits?.filter(habitItem => habitItem !== key)});
                        }
                      }}
                    />
                    {habit}
                  </div>
                ))}
              </label>
              <label>
                Покупки:
                <div>
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={user?.isMakingPurchasesOnline}
                      onChange={e => setUser({...user, isMakingPurchasesOnline: e.target.value === 'true'})}
                    />
                    Онлайн              
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={!user?.isMakingPurchasesOnline}
                      onChange={e => setUser({...user, isMakingPurchasesOnline: e.target.value === 'true'})}
                    />
                    Лично
                  </label>
                </div>
              </label>
              <button type="submit" onClick={handleEditClick}>Сохранить</button>
            </form>
          </Modal>
        {/* <div className='surveys'>
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
        </div> */}
    </div>
  );
}

export default UserProfile;

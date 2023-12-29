import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/account.css';
import Header from '../components/Header';
import axios from 'axios';


function CompanyProfile() {
  const [company, setCompany] = useState({
    id: 1,
    name: 'Компания 1',
    workers: [],
    surveys: []
  });

  const fetchCompanyData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/company/my', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setCompany(response.data);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const addUserToCompany = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/company/addUserById/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        fetchCompanyData();
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='user-profile'>
         <Header/>
         <div className='user-info'>
            <h3>Личный кабинет</h3>
            <p>Информация о компании</p>
            <p>Название: {company.name}</p>
            <button className='logout'>Выйти</button>
            <button onClick={() => addUserToCompany(1)}>Добавить пользователя</button> 
         </div>
        {/* <div className='surveys'>
            <h3>Статистика созданных опросов</h3>
            <ul className='survey-list'>
              {user.createdSurveysStats.map((stat, index) => (
              <li key={index}>{stat}</li>
              ))}
              </ul>
        </div> */}
    </div>
  );
}

export default CompanyProfile;
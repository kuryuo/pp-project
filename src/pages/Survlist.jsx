import React, { useState, useRef } from 'react';
import '../styles/survlist.css';
import Header from '../components/Header';
import searchsvg from '../images/search.svg';

function RecommendedSurveys() {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef(null);

  // данные из api
  const surveys = ['Опрос 1', 'Опрос 2', 'Опрос 3', 'Опрос 4', 'Опрос 5'];

  const filteredSurveys = surveys.filter(survey =>
    survey.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchIconClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className='recommended-surveys'>
      <Header/>
      <div className="search-container">
        <input className='search-inp' ref={searchInputRef} type='text' placeholder='Поиск...' value={search} onChange={e => setSearch(e.target.value)} />
        <img
          src={searchsvg}
          alt="search"
          className="search-icon"
          onClick={handleSearchIconClick}
        />
      </div>
      <ul className='surveys-list'>
        {filteredSurveys.map((survey, index) => (
          <li key={index}>{survey}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendedSurveys;
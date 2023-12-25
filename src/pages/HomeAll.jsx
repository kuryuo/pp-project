import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import welcome from '../images/welcome.svg';
import create from '../images/create.png';
import takepart from '../images/takepart.png'


function HomeAll() {
  return (
    <div className='main-home'>
        <div className='welcome'>
        <img src={welcome} className='picture-1' alt="welcome" />
          <div className='text-content'>
            <h2 className='h2-home'>Добро пожаловать</h2>
            <div className='line'></div>
            <p className='p-home'>Здесь каждый может влиять на общественное мнение и зарабатывать на своих взглядах. Вы можете создавать увлекательные опросы или участвовать в уже существующих, получая деньги за каждый пройденный вопрос. Присоединяйтесь к нам, где ваш голос становится валютой!</p>
          </div>
        </div>
        <div className='create'> 
        <img src={create} className='picture-2' alt="create" />
          <div className='text-content'>
            <h2 className='h2-home'>Создавайте</h2>
            <div className='line'></div>
            <p className='p-home'>Вы – творец перемен! Создавайте уникальные опросы, делясь своими идеями и влияя на общественное мнение.</p>
          </div>
        </div>
        <div className='take-part'>
        <div className='buttons-home'>
            <Link to="/login">
              <button className='login'>Войти</button>
            </Link>
            <Link to="/register">
            <button className='register'>Регистрация</button>
            </Link>
          </div>
        <img src={takepart} className='picture-3' alt="takepart" />
          <div className='text-content'>
            <h2 className='h2-home'>Участвуйте</h2>
            <div className='line'></div>
            <p className='p-home'> Ваше мнение имеет значение, и мы готовы вознаградить вас за ваши взгляды.</p>
          </div>
        </div>
    </div>
  );
}

export default HomeAll;
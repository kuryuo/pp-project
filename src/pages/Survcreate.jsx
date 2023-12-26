import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/survcreate.css';

function SurvCreate() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [step, setStep] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionType, setQuestionType] = useState('one');
  const [questionTitle, setQuestionTitle] = useState('');
  const [options, setOptions] = useState(['']);
  const [minAnswers, setMinAnswers] = useState(1);
  const [maxAnswers, setMaxAnswers] = useState(1);
  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleBackClick = () => {
    if (step > 1) {
      if (questionNumber > 1) {
        setQuestionNumber(questionNumber - 1);
      } else {
        setStep(step - 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div>
      <Header />
      <div className='create-surv'>
        {step === 1 ? (
          <>
            <h2 className='surv-title'> Придумайте название опроса</h2>
            <input
              className='surv-title-inp'
              type='text'
              placeholder='Название опроса...'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <h2 className='surv-title'>Напишите категории опроса</h2>
            <input
              className='surv-title-inp'
              type='text'
              placeholder='Категории опроса...'
              value={category}
              onChange={e => setCategory(e.target.value)}
            />

            <div className='button-serv-cont'>
              <button className='button-serv'>Назад</button>
              <button className='button-serv' onClick={handleNextClick}>Далее</button>
            </div>
          </>
        ) : (
          <div className='create-question'>
            <div className='quest-row'>  
              <label className='quest-num'>Вопрос {questionNumber} </label>
              <select className='select-ques' value={questionType} onChange={e => setQuestionType(e.target.value)}>
                <option value="one">Выбор одного</option>
                <option value="multiple">Выбор нескольких</option>
              </select>
            </div>
            {questionType === 'multiple' && (
            <div className='count-ques'>
              <label className='min-max'>Минимум</label>
              <input type='number' value={minAnswers} onChange={e => setMinAnswers(e.target.value)} />
              <label className='min-max'>Максимум</label>
              <input type='number' value={maxAnswers} onChange={e => setMaxAnswers(e.target.value)} />
            </div>
          )}

            <input
              className='surv-title-inp'
              type='text'
              placeholder='Название вопроса...'
              value={questionTitle}
              onChange={e => setQuestionTitle(e.target.value)}
            />

            {options.map((option, index) => (
              <div key={index}>
                <input
                  className='surv-title-inp'
                  type='text'
                  placeholder={`Вариант ответа ${index + 1}`}
                  value={option}
                  onChange={e => handleOptionChange(index, e.target.value)}
                />
                <button className='del-ques' onClick={() => removeOption(index)}>Удалить</button>
              </div>
            ))}

            <button className='button-serv' onClick={addOption}>Добавить вариант ответа</button>

            <div className='button-serv-cont'>
        <button className='button-serv' onClick={handleBackClick}>Назад</button>
        <button className='button-serv' onClick={handleNextQuestion}>Далее</button>
        <button className='button-serv'>
          <Link to="/survlist">Завершить</Link>
        </button>
      </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SurvCreate;
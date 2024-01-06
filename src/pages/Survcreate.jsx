import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/survcreate.css';

function SurvCreate() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([{ title: '', options: [''], type: 'one', minAnswers: 1, maxAnswers: 1 }]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };
  
  const addOption = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.push('');
    setQuestions(newQuestions);
  };

    const removeOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, i) => i !== optionIndex);
    setQuestions(newQuestions);
  };
  
  const handleBackClick = () => {
    if (step > 1) {
      if (questions.length > 1) {
        if (activeQuestion > 0) {
          setActiveQuestion(activeQuestion - 1); 
        } else {
          setStep(step - 1);
        }
      } else {
        setStep(step - 1);
      }
    }
  };
  
  const handleNextQuestion = () => {
    setQuestions([...questions, { title: '', options: [''], type: 'one', minAnswers: 1, maxAnswers: 1 }]);
    setActiveQuestion(activeQuestion + 1); 
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
          questions.map((question, questionIndex) => (
            questionIndex === activeQuestion && (
            <div className='create-question' key={questionIndex}>
              <div className='quest-row'>  
                <label className='quest-num'>Вопрос {questionIndex + 1} </label>
                <select 
                  className='select-ques' 
                  value={question.type} 
                  onChange={e => {
                    const newQuestions = [...questions];
                    newQuestions[questionIndex].type = e.target.value;
                    setQuestions(newQuestions);
                  }}
                >
                  <option value="one">Выбор одного</option>
                  <option value="multiple">Выбор нескольких</option>
                </select>
              </div>
              {question.type === 'multiple' && (
                <div className='count-ques'>
                  <label className='min-max'>Минимум</label>
                  <input 
                    type='number' 
                    value={question.minAnswers} 
                    onChange={e => {
                      const newQuestions = [...questions];
                      newQuestions[questionIndex].minAnswers = e.target.value;
                      setQuestions(newQuestions);
                    }} 
                  />
          <label className='min-max'>Максимум</label>
          <input 
            type='number' 
            value={question.maxAnswers} 
            onChange={e => {
              const newQuestions = [...questions];
              newQuestions[questionIndex].maxAnswers = e.target.value;
              setQuestions(newQuestions);
            }} 
          />
        </div>
      )}
      <input
        className='surv-title-inp'
        type='text'
        placeholder='Название вопроса...'
        value={question.title}
        onChange={e => {
          const newQuestions = [...questions];
          newQuestions[questionIndex].title = e.target.value;
          setQuestions(newQuestions);
        }}
      />
      {question.options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <input
            className='surv-title-inp'
            type='text'
            placeholder={`Вариант ответа ${optionIndex + 1}`}
            value={option}
            onChange={e => handleOptionChange(questionIndex, optionIndex, e.target.value)}
          />
          <button className='del-ques' onClick={() => removeOption(questionIndex, optionIndex)}>Удалить</button>
        </div>
      ))}
      <button className='button-serv' onClick={() => addOption(questionIndex)}>Добавить вариант ответа</button>
      <div className='button-serv-cont'>
        <button className='button-serv' onClick={handleBackClick}>Назад</button>
        <button className='button-serv' onClick={handleNextQuestion}>Далее</button>
        <button className='button-serv'>
          <Link to="/survlist">Завершить</Link>
        </button>
      </div>
    </div>
  ))
))}
</div>
</div>
);
}

export default SurvCreate;
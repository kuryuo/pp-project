import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/survcreate.css';

function SurvPass() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([
    {
      title: 'Вопрос 1',
      options: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      answer: null
    },
  ]);

  const handleOptionChange = (answer) => {
    const newQuestions = [...questions];
    newQuestions[questionNumber].answer = answer;
    setQuestions(newQuestions);
  };

  const handleBackClick = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const handleNextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <div>
      <Header />
      <div className='create-surv'>
        <div className='create-question'>
          <div className='quest-row'>  
            <label className='quest-num'>{questions[questionNumber].title}</label>
          </div>

          {questions[questionNumber].options.map((option, index) => (
            <div key={index}>
              <input
                className='surv-title-inp'
                type='radio'
                name='option'
                value={option}
                onChange={() => handleOptionChange(option)}
              />
              <label>{option}</label>
            </div>
          ))}

          <div className='button-serv-cont'>
            <button className='button-serv' onClick={handleBackClick}>Назад</button>
            <button className='button-serv' onClick={handleNextQuestion}>Далее</button>
            {questionNumber === questions.length - 1 && <button className='button-serv'>Завершить</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurvPass;
import React, { useState } from 'react';
import QuizTaking from './components/QuizTaking';
import ManageQuestions from './components/Questions';
import quizzesData from './data/quizzes.json';
import './App.css';

const App = () => {
  const [view, setView] = useState('home');
  const [quizzes, setQuizzes] = useState(quizzesData);

  return (
    <div className="App">
      <h2 className='header'>Online Quiz Platform</h2>
      <div className='main-content'>
      <main>
        {view === 'home' && (
          <div className='button-container'>
            <button className='take-button' onClick={() => setView('take')}>Take Quiz</button>
          </div>
        )}
        
        {view === 'take' && <QuizTaking setView={setView} quizzes={quizzes} />}
    
      </main>
      </div>
    </div>
  );
};

export default App;

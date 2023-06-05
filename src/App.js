import './App.css';
import React, { useState, useContext } from 'react';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Other/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="App">
      <h1 className="title">Quizapp</h1>
      <hr/>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, category, setCategory, difficulty, setDifficulty}}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>

      
    </div>
    
  );
}

export default App;

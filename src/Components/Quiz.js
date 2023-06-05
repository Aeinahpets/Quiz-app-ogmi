import React, { useState, useContext, useEffect } from "react";
import { QuestionsHistory, QuestionsGaming, QuestionsScience } from "../Other/QuestionBank";
import { QuizContext } from "../Other/Context";
import { Box, Button } from '@mui/material';
import "../App.css";

export default function Quiz() {
    const { score, setScore, setGameState, category, difficulty } = useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedButton, setClickedButton] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [count, setCount] = useState(0);

    const handleOptionClick = (option) => {
        if (isDisabled) {
            return;
        }
        const isCorrect = option === questions[currentQuestion].answer;
        if (isCorrect) {
            setClickedButton(option + "-correct");
            setScore((prevScore) => prevScore + 1);
        } else {
            setClickedButton(option + "-incorrect");
        }
        setIsDisabled(true);

        setTimeout(() => {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setClickedButton(null);
            setIsDisabled(false);
            setCount((prevCount) => prevCount + 1);
            console.log(count);
            if (count === 4) {
                setGameState("endScreen");
            }    
        }, 800);
        

    };

    const getQuestionBank = () => {
        switch (category) {
            case "History":
                return QuestionsHistory;
            case "Gaming":
                return QuestionsGaming;
            case "Science":
                return QuestionsScience;
            default:
                return [];
        }
    };

    const questions = getQuestionBank();
    useEffect(() => {
        switch (difficulty) {
            case "Easy":
                setCurrentQuestion(0);
                break;
            case "Medium":
                setCurrentQuestion(5);
                break;
            case "Hard":
                setCurrentQuestion(10);
                break;
            default:
                setCurrentQuestion(0);

        }
    }, [category, difficulty])

    if (questions.length === 0) {
        return <div>No questions available for the selected category.</div>;
    }
    return (
        
        <div className="Quiz">
            <div className="quiz_info">
                <span>Category : {category} ///</span>
                <span> Score : {score}</span>
            </div>
            <br />
            <h3 className="question">{questions[currentQuestion].prompt}</h3>
            <Box display="flex" justifyContent="space-between" className="options">
                <Button
                    size="large"
                    onClick={() => handleOptionClick("A")}
                    className={clickedButton === "A-correct" ? "correct" : clickedButton === "A-incorrect" ? "incorrect" : ""}
                    disabled={isDisabled}>
                    {questions[currentQuestion].optionA}</Button>
                <Button
                    size="large"
                    onClick={() => handleOptionClick("B")}
                    className={clickedButton === "B-correct" ? "correct" : clickedButton === "B-incorrect" ? "incorrect" : ""}
                    disabled={isDisabled}>
                    {questions[currentQuestion].optionB}</Button>
                <Button
                    size="large"
                    onClick={() => handleOptionClick("C")}
                    className={clickedButton === "C-correct" ? "correct" : clickedButton === "C-incorrect" ? "incorrect" : ""}
                    disabled={isDisabled}>
                    {questions[currentQuestion].optionC}</Button>
                <Button
                    size="large"
                    onClick={() => handleOptionClick("D")}
                    className={clickedButton === "D-correct" ? "correct" : clickedButton === "D-incorrect" ? "incorrect" : ""}
                    disabled={isDisabled}>
                    {questions[currentQuestion].optionD}</Button>
            </Box>
        </div>

    )
}
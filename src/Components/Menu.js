import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../Other/Context";
import "../App.css";
import { TextField, MenuItem, Button, CircularProgress } from '@mui/material';
import ErrorMessage from "./ErrorMessage";

const categories = ["History","Gaming", "Science"];

const difficulties = ["Easy", "Medium", "Hard"];

export default function Menu() {
    const { gameState, setGameState, score, setScore, category, setCategory, difficulty, setDifficulty } = useContext(QuizContext);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (category && difficulty) {
        }
      }, [category, difficulty, setGameState]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleSubmit = () => {
        if (!category || !difficulty) {
            setError(true);
        }
        else {
            setScore(0);
            setError(false);
            setIsLoading(true);
            setGameState("quiz");
            setIsLoading(false);
        }
    }

    return (
        <div className="Menu">
            <div className="select_settings">
                {error && <ErrorMessage>Please fill in all the fields</ErrorMessage>}
                <TextField
                    select
                    label="Select Category"
                    variant="outlined"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <br />
                <TextField
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                >
                    {difficulties.map((difficulty) => (
                        <MenuItem key={difficulty} value={difficulty}>
                            {difficulty}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Button variant="contained" size="large"
                onClick={handleSubmit}
            >Start Quiz</Button>
            {isLoading && <CircularProgress />}
        </div>
    );
}

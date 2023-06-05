import React, { useContext } from "react";
import { QuizContext } from "../Other/Context";
import { Button } from "@mui/material";
import "../App.css";
import level0 from "../Images/level0.png";
import level1 from "../Images/level1.png";
import level2 from "../Images/level2.png";
import level3 from "../Images/level3.png";
import level4 from "../Images/level4.png";
import level5 from "../Images/level5.png";

export default function EndScreen() {
    const { score, setGameState } = useContext(QuizContext);
    let imageSrc;
    switch (score) {
        case 0:
            imageSrc = level0;
            break;
        case 1:
            imageSrc = level1;
            break;
        case 2:
            imageSrc = level2;
            break;
        case 3:
            imageSrc = level3;
            break;
        case 4:
            imageSrc = level4;
            break;
        case 5:
            imageSrc = level5;
            break;
        default:
            imageSrc = null;
    }
    const handleGoBackToMenu = () => {
        setGameState("menu");
    };
    return (
        <div className="EndScreen">
            <h2>Game over!</h2>
            <p>You got {score}/5 right!</p>
            <br />
            {imageSrc && <img src={imageSrc} alt={`Level ${score}`} />}
            <br />
            <Button variant="contained" size="large" onClick={handleGoBackToMenu}>
                Go back to Menu
            </Button>
        </div>
    );
}

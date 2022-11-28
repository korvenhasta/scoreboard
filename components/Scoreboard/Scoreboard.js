import react, { useState } from "react";
import styles from "./Scoreboard.module.css";
import Title from "../Title/Title";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Progress from "../Progress/Progress";
import Paragraph from "../Paragraph/Paragraph";

const initialState = 0;

// Display message
function displayMessage(score) {
  if (score === 0) {
    return "A journey of a 1000 miles starts with single step"
  }
  else if (score > 0 && score <= 10) {
    return "C'mon you can do it"
  }
  else if (score > 10 && score <= 45) {
    return "You're getting there"
  }
  else {
    return "Hold on! Finish strong"
  }
}

export default function Scoreboard(props) {
    
    let [counter, setCounter] = useState(initialState);

    // Reset score
    function resetScore() {
        setCounter(initialState)
    } 

    // Change score
    function changeScore(changeBy) {
        setCounter(counter + changeBy)
    }

    // +50%
    function addFiftyPercent() {
    let res = Math.round(counter * 1.5);
    if (res >= 100) {
        setCounter(counter)
    }
    else {
        setCounter(res)
    }
    }

    // -50%
    function minusFiftyPercent() {
    let res = Math.round(counter * 0.5);
    if (res <= 0) {
        setCounter(counter)
    }
    else {
        setCounter(res)
    }
    }

    return (
        <div
            // {...props}
            className={styles.scoreboard}
        >
            <Title>{props.player}</Title>
            <Label></Label>
            <Progress value={counter} max="100"></Progress> 

            <ButtonContainer>
                <Paragraph>{displayMessage(counter)}</Paragraph>
                <Paragraph>{counter} / 100</Paragraph>
            </ButtonContainer>

            <ButtonContainer>
                <Button onClick={minusFiftyPercent} disabled={counter <= 0}>-50%</Button>

                <Button onClick={() => changeScore(-5)} disabled={counter <= 0}>-5</Button>

                <Button onClick={() => changeScore(-1)} disabled={counter <= 0}>-1</Button>

                <Button onClick={resetScore} disabled={counter === 0}>Reset</Button>

                <Button onClick={() => changeScore(1)} disabled={counter === 100}>+1</Button>

                <Button onClick={() => changeScore(5)} disabled={counter === 100}>+5</Button>

                <Button onClick={addFiftyPercent} disabled={counter === 0}>+50%</Button>
            </ButtonContainer>
        </div>
    )
}
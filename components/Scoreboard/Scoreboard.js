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
    return "A journey of a 1000 miles starts with single step";
  } else if (score > 0 && score <= 10) {
    return "C'mon you can do it";
  } else if (score > 10 && score <= 45) {
    return "You're getting there";
  } else {
    return "Hold on! Finish strong";
  }
}

export default function Scoreboard(props) {
  const [score, setScore] = useState(initialState);

  // Reset score
  function resetScore() {
    updateScore(initialState);
  }

  // Change score
  function changeScore(changeBy) {
    updateScore(score + changeBy);
  }

  // +50%
  function addFiftyPercent() {
    updateScore(Math.round(score * 1.5));
  }

  // -50%
  function minusFiftyPercent() {
    updateScore(Math.round(score * 0.5));
  }

  function updateScore(newScore) {
    if (newScore > 100) {
      newScore = 100;
    }
    if (newScore < 0) {
      newScore = 0;
    }
    setScore(newScore);
    props.handleScore(props.playerName, newScore);
  }

  return (
    <div
      // {...props}
      className={styles.scoreboard}
    >
      <ButtonContainer>
        <Title>{props.playerName}</Title>
        <Button
          variant={"button_delete"}
          onClick={() => {
            props.handleDeletePlayer(props.playerName);
          }}
        >
          Delete
        </Button>
      </ButtonContainer>

      <Label></Label>
      <Progress value={score} max="100"></Progress>

      <ButtonContainer>
        <Paragraph>{displayMessage(score)}</Paragraph>
        <Paragraph>{score} / 100</Paragraph>
      </ButtonContainer>

      <ButtonContainer>
        <Button onClick={minusFiftyPercent} disabled={score <= 1}>
          -50%
        </Button>

        <Button onClick={() => changeScore(-5)} disabled={score <= 0}>
          -5
        </Button>

        <Button onClick={() => changeScore(-1)} disabled={score <= 0}>
          -1
        </Button>

        <Button onClick={resetScore} disabled={score === 0}>
          Reset
        </Button>

        <Button onClick={() => changeScore(1)} disabled={score === 100}>
          +1
        </Button>

        <Button onClick={() => changeScore(5)} disabled={score === 100}>
          +5
        </Button>

        <Button
          onClick={addFiftyPercent}
          disabled={score === 0 || score >= 100}
        >
          +50%
        </Button>
      </ButtonContainer>
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form/Form";
import Title from "../components/Title/Title";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

export default function Home() {
  const [players, setPlayers] = useState([]);

  const [playerName, setPlayerName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPlayers([...players, { name: playerName, score: 0 }]);
    setPlayerName("");
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleDeletePlayer(playerName) {
    setPlayers(
      players.filter((player) => {
        return player.name != playerName;
      })
    );
  }

  function handleScore(playerName, playerScore) {
    let updatedPlayer = players.find((player) => {
      return player.name === playerName;
    });
    updatedPlayer.score = playerScore;
    setPlayers([...players]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Score Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>Score Boards</Title>

        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          playerName={playerName}
        />

        {players
          .sort((a, b) => {
            return b.score - a.score;
          })
          .map((player) => (
            <Scoreboard
              playerName={player.name}
              key={player.name}
              handleDeletePlayer={handleDeletePlayer}
              handleScore={handleScore}
            />
          ))}
      </main>

      <Footer>
        Coded by{" "}
        <a
          href="https://github.com/korvenhasta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Marina Kenina
        </a>
      </Footer>
    </div>
  );
}

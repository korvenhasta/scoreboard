import { useState, createContext, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form/Form";
import Title from "../components/Title/Title";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

const formContext = createContext({});

export function useFormContext() {
  return useContext(formContext);
}

export default function Home() {
  const [players, setPlayers] = useState([]);

  const [playerName, setPlayerName] = useState("");

  const [playerId, setPlayerId] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setPlayers([...players, { id: playerId, name: playerName, score: 0 }]);
    setPlayerName("");
    setPlayerId(playerId + 1);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleDeletePlayer(playerId) {
    setPlayers(
      players.filter((player) => {
        return player.id != playerId;
      })
    );
  }

  function handleScore(playerId, playerScore) {
    let updatedPlayer = players.find((player) => {
      return player.id === playerId;
    });
    updatedPlayer.score = playerScore;
    setPlayers([...players]);
  }

  return (
    <formContext.Provider
      value={{
        playerName: playerName,
        handleSubmit: handleSubmit,
        handleChange: handleChange,
      }}
    >
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
                playerId={player.id}
                key={player.id}
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
    </formContext.Provider>
  );
}

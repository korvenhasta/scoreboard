import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form/Form";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Paragraph from "../components/Paragraph/Paragraph";
import Label from "../components/Label/Label";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [players, setPlayers] = useState([]);

  const [playerName, setPlayerName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPlayers([...players, playerName]);
    setPlayerName("");
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
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

        {players.map((name) => (
          <Scoreboard player={name} key={name} />
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

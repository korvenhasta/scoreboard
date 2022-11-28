import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/Form/Form'
import Title from '../components/Title/Title'
// import ButtonContainer from '../components/ButtonContainer/ButtonContainer'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Paragraph from '../components/Paragraph/Paragraph'
import Label from '../components/Label/Label'
// import Progress from '../components/Progress/Progress'
import Scoreboard from '../components/Scoreboard/Scoreboard'
import Footer from '../components/Footer/Footer'

function handleSubmit(event) {
  event.preventDefault();
}

export default function Home() {

  const [player, setPlayer] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Score Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Title>Score Boards</Title>

        <Form onSubmit={handleSubmit}>
          <Paragraph>New player</Paragraph>
          <Label htmlFor={"playerName"}>
            <Input name={"playerName"} id={"playerName"} value={player}></Input>
          </Label>
          <Button type={"submit"}>Add student</Button>
        </Form>

        <Scoreboard player="Anton"/>
        <Scoreboard player="Natalia"/>
        <Scoreboard player="Rein"/>
        {/* <Title>
          Score Boards
        </Title>

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
        </ButtonContainer> */}



      </main>

      <Footer>
          Coded by{' '}
          <a
            href="https://github.com/korvenhasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}Marina Kenina
          </a>
        </Footer>
    </div>
  )
}

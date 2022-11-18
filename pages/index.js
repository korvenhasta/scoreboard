import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Title from '../components/Title/Title'
import ButtonContainer from '../components/ButtonContainer/ButtonContainer'
import Button from '../components/Button/Button'
import Paragraph from '../components/Paragraph/Paragraph'
import Label from '../components/Label/Label'
import Progress from '../components/Progress/Progress'
import Footer from '../components/Footer/Footer'

const initialState = 0;

export default function Home() {

  let [counter, setCounter] = useState(initialState);


  function increaseScore(){
    setCounter(counter + 1)
  }

  function decreaseScore(){
    setCounter(counter - 1)
  }

  function resetScore() {
    setCounter(initialState)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Score Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>
          Score Board
        </Title>

        <Label></Label>
        <Progress value={counter} max="100"></Progress>

        <ButtonContainer>
          <Paragraph>A journey of a 1000 miles starts with single step</Paragraph>
          <Paragraph>{counter} / 100</Paragraph>
        </ButtonContainer>


        <ButtonContainer>
          <Button>-50%</Button>

          <Button>-5</Button>

          <Button onClick={decreaseScore} disabled={counter <= 0}>-1</Button>

          <Button onClick={resetScore}>Reset</Button>

          <Button onClick={increaseScore}>+1</Button>

          <Button>+5</Button>

          <Button>+50%</Button>
        </ButtonContainer>

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

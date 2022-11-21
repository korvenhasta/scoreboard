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

  // Reset score
  function resetScore() {
    setCounter(initialState)
  } 

  // Display message
  function displayMessage(score) {
    if (score === 0) {
      return "A journey of a 1000 miles starts with single step"
    }
    else if (score > 0 &&  score <= 10) {
      return "C'mon you can do it"
    }
    else if (score > 10 &&  score <= 45) {
      return "You're getting there"
    }
    else {
      return "Hold on! Finish strong"
    }
  }

  function decreaseScoreByOne(){
    setCounter(counter - 1)
  }

  function increaseScoreByFive(){
    setCounter(counter + 5)
  }

  function decreaseScoreByFive(){
    setCounter(counter - 5)
  }

  // Change score
  function changeScore(changeBy) {
    console.log("Change by: ", changeBy)
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

        {/* style={progressBarColor(counter)} */}

        <ButtonContainer>
          <Paragraph>{displayMessage(counter)}</Paragraph>
          <Paragraph>{counter} / 100</Paragraph>
        </ButtonContainer>


        <ButtonContainer>
          <Button onClick={minusFiftyPercent} disabled={counter <= 0}>-50%</Button>

          <Button onClick={decreaseScoreByFive} disabled={counter <= 0}>-5</Button>

          <Button onClick={decreaseScoreByOne} disabled={counter <= 0}>-1</Button>

          <Button onClick={resetScore} disabled={counter === 0}>Reset</Button>

          <Button onClick={() => changeScore(1)} disabled={counter === 100}>+1</Button>

          <Button onClick={increaseScoreByFive} disabled={counter === 100}>+5</Button>

          <Button onClick={addFiftyPercent} disabled={counter === 0}>+50%</Button>
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

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'
import Title from '../components/Title/Title'
import Paragraph from '../components/Paragraph/Paragraph'
import Footer from '../components/Footer/Footer'


export default function Home() {
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
        <Paragraph>
          A journey of a 1000 miles starts with single step
        </Paragraph>

        <Paragraph>
          0 / 100
        </Paragraph>

        <Button>
              Reset
        </Button>
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

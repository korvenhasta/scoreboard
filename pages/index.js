import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Root from '../components/Root/Root'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Score Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Button>
          Reset
        </Button>
      </Main>

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
    </Root>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

      <Footer />

    </div>
  )
}

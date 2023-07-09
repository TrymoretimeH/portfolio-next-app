import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../Components/Main'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`min-h-screen ${inter.className}`}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

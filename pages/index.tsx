import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../components.x/Main'
import About from '../components.x/About'
import Skills from '../components.x/Skills'
import Projects from '../components.x/Projects'
import Contact from '../components.x/Contact'

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

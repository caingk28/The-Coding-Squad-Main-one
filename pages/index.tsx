import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Games from '../components/Games'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Coding Squad</title>
        <meta name="description" content="Empower Your Child with Coding Skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Games />
        <Team />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
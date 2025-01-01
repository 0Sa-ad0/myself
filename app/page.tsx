import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Languages from './components/Languages'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Education />
        <Languages />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


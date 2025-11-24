import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Intro from './pages/Intro'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Navbar/>

      <div id='intro'>
      <Intro/>
      </div>

      <div id='about'>
        <About/>
      </div>

      <div id='experience'>
        <Experience/>
      </div>

      <div id='projects'>
        <Projects/>
      </div>
    </>
  )
}

export default App

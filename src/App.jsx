import {} from 'react'
import './App.css'
import Header from './Header/Header'
import Presentation from './Presentation/Presentation'
import About from './About/About'
import Skills from './Skills/Skills'
import Footer from './Footer/Footer'



function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='main-grid'>
          <div className='item'>
            <Presentation />
          </div>
          <div className='item'>
            <About />
          </div>
          <div className="item">
            <Skills />
          </div>
          <div className='item'>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
        
      </main>
      
    </>
  )
}

export default App

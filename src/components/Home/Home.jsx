import { Fragment, useState } from 'react';
import FloatingBtn from '../FloatingBtn/FloatingBtn';
import LoginDialog from '../Login/LoginDialog';
import { AccountCircle } from '@mui/icons-material';
import Header from '../Header/Header';
import Presentation from '../Presentation/Presentation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {

    const fabStyle = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 16,
        right: 16,
      };
      
    
      const fab = {
          color: 'primary',
          sx: fabStyle,
          icon: <AccountCircle />,
          label: 'Login',
      }
    
      const [openLogin, setOpenLogin] = useState(false)
    
      const handleLogin = () => {
        setOpenLogin(true)
      }


    return (
        <Fragment>
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
                    <Projects />
                  </div>
                  <div className='item'>
                    <footer>
                      <Footer />
                    </footer>
                  </div>
                </div>
                <FloatingBtn onClick={handleLogin} />
                <LoginDialog open={openLogin} setOpen={setOpenLogin}/>
              </main>
        </Fragment>
    )
}

export default Home;
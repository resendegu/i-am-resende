import { useState } from 'react'
import './Header.css'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import logoR from '../../assets/logo_r.jpg'

const Header = () => {
    const [name, setName] = useState('Gustavo Resende')

    window.onscroll = () => {
        if (window.scrollY > 50) {
            document.querySelector('.header').classList.add('header-scroll')
            document.querySelector('.header-logo').classList.add('header-scroll-logo')
            setName('resende.app')
        } else {
            document.querySelector('.header').classList.remove('header-scroll')
            document.querySelector('.header-logo').classList.remove('header-scroll-logo')
            setName('Gustavo Resende')
        }
    }

    return (
        <div className='header'>
            
            <div className="header-logo" >
                {/* <span>R</span> */}
                <img src={logoR} alt="Gustavo Resende" />
            </div>

            <div className="header-title">
                <a href="./">
                    <h1>{name}</h1>
                </a>
            </div>

            <div className='contact'>
                <a href="https://instagram.com/resendegu" target='_blank' rel="noreferrer">
                    <div className="window-btn red">
                        <Instagram />
                    </div>
                </a>
                <a href="https://linkedin.com/in/resendegu/" target='_blank' rel="noreferrer">
                    <div className="window-btn yellow">
                        <LinkedIn />
                    </div>
                </a>
                <a href="https://github.com/resendegu" target='_blank' rel="noreferrer">
                    <div className="window-btn green">
                        <GitHub />
                    </div>
                </a>
                

            </div>
        </div>   
    )
}

export default Header
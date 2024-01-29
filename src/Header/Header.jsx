import {} from 'react'
import './Header.css'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import logoR from '../assets/logo_r.jpg'

const Header = () => {
    const handlePosition = (e) => {
        console.log(e)
        const wasFixed = e.target.classList.toggle("header-absolute")
        if (wasFixed) {
            console.log('Header solto')
        } else {
            console.log('Header fixado')
        }
    }

    return (
        <div className='header' onClick={handlePosition}>
            
            <div className="header-logo" >
                {/* <span>R</span> */}
                <img src={logoR} alt="Gustavo Resende" />
            </div>

            <div className="header-title">
                <a href="./">
                    <h1>Gustavo Resende</h1>
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
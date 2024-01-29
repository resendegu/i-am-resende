import {} from 'react'
import './Footer.css'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import logoR from '../assets/logo_r.jpg'

const Footer = () => {
    

    return (
        <div className='footer'>
            
            <div className="footer-logo" >
                {/* <span>R</span> */}
                <img src={logoR} alt="Gustavo Resende" />
            </div>

            <div className="footer-title">
                <a href="./">
                    <h1>Desenvolvido por Gustavo Resende</h1>
                    <p>Código deste site no GitHub</p>
                </a>
            </div>

        </div>   
    )
}

export default Footer
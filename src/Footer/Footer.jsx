import {} from 'react'
import './Footer.css'
import { EmailOutlined, GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import logoR from '../assets/logo_r.jpg'

const Footer = () => {
    

    return (
        <div className='footer'>
            
            

            <div className="footer-title">

                <div className="footer-logo" >
                    
                    <img src={logoR} alt="Gustavo Resende" />
                </div>
                <p>Desenvolvido por Gustavo Resende</p>
                <p>E-mail: <a href="mailto:gustavo@resende.app">gustavo@resende.app</a></p>
                <p><a href="https://github.com/resendegu/i-am-resende" target='_blank' rel='noreferrer' className='link-repo'>Código deste site no GitHub</a></p>
                <p></p>
            </div>

            <div className="footer-content">
                <a href="https://instagram.com/resendegu" target='_blank' rel="noreferrer">
                    <div className="footer-btn">
                        <Instagram />
                    </div>
                </a>
                <a href="https://linkedin.com/in/resendegu/" target='_blank' rel="noreferrer">
                    <div className="footer-btn">
                        <LinkedIn />
                    </div>
                </a>
                <a href="https://github.com/resendegu" target='_blank' rel="noreferrer">
                    <div className="footer-btn">
                        <GitHub />
                    </div>
                </a>
                <a href="https://youtube.com/@resendegu" target='_blank' rel="noreferrer">
                    <div className="footer-btn">
                        <YouTube />
                    </div>
                </a>
                <a href="mailto:gustavo@resende.app" target='_blank' rel="noreferrer">
                    <div className="footer-btn">
                        <EmailOutlined />
                    </div>
                </a>
            </div>

        </div>   
    )
}

export default Footer
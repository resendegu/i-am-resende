import {} from 'react'
import './Footer.css'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
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
                <h3>Contato e redes sociais</h3>
                <p></p>
            </div>

            <div className="footer-content">
                
            </div>

        </div>   
    )
}

export default Footer
import {} from 'react'
import meIcon from '../assets/favicon.ico'
import './Header.css'

const Header = () => {


    return (
        <div className='header'>
            <div className="header-logo">
                <img src={meIcon} alt="Gustavo Resende" />
            </div>

            <div className="header-title">
                <h1>Gustavo Resende</h1>
            </div>

            <div className='contact'>
                Contact
            </div>
        </div>
    )
}

export default Header
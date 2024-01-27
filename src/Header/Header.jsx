import {} from 'react'
import './Header.css'

const Header = () => {


    return (
        <div className='header'>
            <div className="header-logo">
                <span>R</span>
                {/* <img src={meIcon} alt="Gustavo Resende" /> */}
            </div>

            <div className="header-title">
                <a href="./">
                    <h1>Gustavo Resende</h1>
                </a>
            </div>

            <div className='contact'>
                Contact
            </div>
        </div>   
    )
}

export default Header
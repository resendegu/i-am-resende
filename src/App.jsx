import { Fragment, useState } from 'react'
import LoginDialog from './components/Login/LoginDialog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import AuthContextProvider from './contexts/AuthContext'



function App() {

  const handleBackHome = () => {
    window.location.href = '/'
  }

  return (
    <Fragment>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginDialog open={true} setOpen={handleBackHome} />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </Fragment>
  )
}

export default App

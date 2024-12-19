import React from 'react'
import LoginPage from './Partials/LoginPage'
import LoginPageFooter from '../LoginPageFooter/Partials/LoginPageFooter'
import Copyrightfooter from '../HomePage/CopyrightFooter/Partials/Copyrightfooter'

const LoginPageMain = () => {
  return (
    <div>
           <LoginPage />
           <LoginPageFooter/>
           <Copyrightfooter />
    </div>
  )
}

export default LoginPageMain
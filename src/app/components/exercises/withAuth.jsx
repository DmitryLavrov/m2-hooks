import React, {useEffect, useState} from 'react'
import CardWrapper from '../common/Card'

// eslint-disable-next-line react/display-name
const withAuth = Component => props => {
  const [isAuth, setIsAuth] = useState()

  useEffect(() => {
    setIsAuth(localStorage.getItem('user') !== null)
  }, [])

  const onLogin = () => {
    setIsAuth(true)
    localStorage.setItem('user', 'Authorised')
  }

  const onLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('user')
  }

  return (
    <CardWrapper>
      <Component {...props} onLogin={onLogin} onLogout={onLogout} isAuth={isAuth}/>
    </CardWrapper>
  )
}

export default withAuth

import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {


  const [userData, setUserData] = useState({

    email: '',
    password: ''
  
  })

  const changeInputHandler = (e) => {
    setUserData(prevData => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }
  return (

    <section className='register'>
      <div className='container'>
        <h2>Sign In</h2>
        <form className='form register__form'>
          <p className='form__error-message'>This is an Error Message</p>
   
                  <input
            type='email'
            placeholder='example@21gmail.com'
            name='email'
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
                  <input
            type='password'
            placeholder='Password'
            name='password'
            value={userData.password}
            onChange={changeInputHandler}
          />
        
          <button type='submit' className='btn primary'>Register</button>
         
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link> </small>
      </div>
    </section>
  )
}

export default LoginPage

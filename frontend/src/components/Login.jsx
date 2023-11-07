import React from 'react'
import '../stylesheets/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-section'>
            <div className='login-header'>
                <h1>Log In</h1>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' />
                <button type='submit'>Log In</button>
            </form>
            <div className='login-bottom'>
              <span>Don't have an account? <span><Link to='/signup' className='signup'>Sign Up</Link></span></span>
              <span>Forgot Password</span>
            </div>
        </div>
    </div>
  )
}

export default Login
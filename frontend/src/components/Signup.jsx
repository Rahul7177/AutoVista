import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/signup.css'

const Signup = () => {
  return (
    <div className='signin-container'>
        <div className='signin-section'>
            <div className='signin-header'>
                <h1>Sign Up</h1>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' />
                <label htmlFor="repassword">Re-Enter Password</label>
                <input type="password" name='repassword' placeholder='Re-type Password' />
                <button type='submit'>Sign Up</button>
            </form>
            <div className='signin-bottom'>
              <span>Already have an account? <span><Link to='/login' className='login'>Log In</Link></span></span>
            </div>
        </div>
    </div>
  )
}

export default Signup
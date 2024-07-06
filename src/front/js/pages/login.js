import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='text-center'>
      <h1 className='mb-5'>Login</h1>
      <div className='mb-5'><input placeholder='Email'></input></div>
      <div className='mb-5'><input placeholder='Password'></input></div>
      <Link to={"/profile"}><div className='mb-5'><button>Entrar</button></div></Link>
      <Link to={"/register"}><div className='mb-5'>!!Register!!</div></Link>
      
    </div>
  )
}

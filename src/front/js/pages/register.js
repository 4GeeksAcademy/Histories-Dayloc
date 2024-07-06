import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login';

const Register = () => {
  return (
    <div className='text-center mb-5' >
      <h1>Register</h1>
      <div className='mb-1'><input placeholder='Nombre'></input></div>
      <div className='mb-1'><input placeholder='Apellido'></input></div>
      <div className='mb-1'><input placeholder='Email'></input></div>
      <div className='mb-4'><input placeholder='Password'></input></div>
      <Link to={"/login"}><div className='mb-5'><button>Registrarse</button></div></Link>
      
    </div>
  )
}

export default Register;

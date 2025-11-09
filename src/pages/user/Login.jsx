import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/auth/authSlice';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        try {
            const response = await loginUser(data).unwrap();
            console.log( response )
            const { token, user} = response;
            dispatch(setUser({user}))
            alert("bienvenido!");
            navigate('/');
        } catch (error) {
            setMessage("Por favor usar un email y contraseña valido.")
        }
    }

  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-6'>
        <h2 className='text-2xl font-semibold pt-5 text-center'>
            Iniciar sesión
        </h2>
        <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input 
                type="email" 
                value={email} 
                className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                placeholder='Correo electronico'
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                value={password} 
                className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                placeholder='Contraseña'
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            {
                message && <p className='text-red-500'>{message}</p>
            }
            <button 
                disabled={loginLoading}
                className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
            >
                    Ingresar
            </button>
            <p className='my-5 text-center'>
                ¿No tienes una cuenta? 
                    <Link to="/register" className='text-blue-500 italic mx-1'>
                        Registrate aquí.
                    </Link> 
            </p>
        </form>
    </div>
  )
}

export default Login
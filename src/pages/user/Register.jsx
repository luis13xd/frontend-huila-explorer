import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/features/auth/authApi';

const Register = () => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }
        try {
            await registerUser(data).unwrap();
            alert("Registro exitoso");
            navigate("/login");
        } catch (error) {
            setMessage('Error al registrar');
        }
    }

    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-6'>
            <h2 className='text-2xl font-semibold pt-5 text-center'>
                Registrate
            </h2>
            <form
                onSubmit={handleRegister}
                className='space-y-5 max-w-sm mx-auto pt-8'
            >
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    value={username}
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    placeholder='Usuario'
                    required
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    placeholder='Correo electronico'
                    required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    placeholder='Contraseña'
                    required
                />
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>
                    Ingresar
                </button>

            </form>
            <p className='my-5 text-center'>
                ¿Ya tienes una cuenta?
                <Link to="/login" className='text-blue-500 italic mx-1'>
                    Ingresa aquí.
                </Link>
            </p>
        </div>
    )
}

export default Register
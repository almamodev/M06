import { Link, useNavigate } from 'react-router-dom';
import Form from "./Form";
import Error from "../Error";
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
        });
            
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data);
            navigate('/booking');
        } else {
            setError(true);
        }
    }
    
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-center text-4xl mb-8 font-bold border-b-2 p-4 border-indigo-600">Login</div>
                <Form handleSubmit={handleSubmit} handleChange={handleChange} value={form} />
                <div className="mt-8">
                    <Link to='/register'>¿Dont have an account? <span className="text-indigo-600">Register now!</span></Link>
                </div>
                {error && <Error message='Invalid username or password' />}
            </div>
        </>
    )
}
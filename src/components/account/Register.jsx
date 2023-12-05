import { useNavigate } from 'react-router-dom';
import Error from '../Error';
import Form from "./Form";
import { useState } from 'react';

export default function Register() {
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
        
        const response = await fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
        });

        if (response.ok) {
            navigate('/');
        } else {
            setError(true);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-center text-4xl mb-8 font-bold border-b-2 p-4 border-indigo-600">Register</div>
                <Form handleSubmit={handleSubmit} handleChange={handleChange} value={form} />
                {error && <Error message='Invalid username' />}
            </div>
        </>
    )
}

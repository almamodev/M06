import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({username: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: form.username, password: form.password})
        })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                return response.json(); 
            })
            .then(data => {
                localStorage.setItem('token', JSON.stringify(data.token));
                navigate('/home');
            })
            .catch(error => console.error(error.message));
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-slate-200">
                <div className="rounded-md shadow-2xl p-12 bg-white">
                    <div className="text-center text-2xl mb-8 font-bold border-b p-2">Login</div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="block border-2 p-2 rounded-md mb-4 text-center bg-slate-100"
                        />
                        <input 
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="block border-2 p-2 rounded-md mb-8 text-center bg-slate-100"
                        />
                        <button 
                            type="submit" 
                            className="rounded-md p-2 mb-4 w-full hover:scale-110 transition duration-500 ease-out bg-indigo-600 text-white"
                        >
                            Continue
                        </button>
                    </form>
                    <div className="text-center rounded-md p-2 hover:scale-110 transition duration-500 ease-out bg-yellow-400 text-white">
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
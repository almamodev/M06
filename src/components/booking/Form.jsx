import { useEffect, useState } from "react";
import Logout from "../account/Logout";

export default function Form({ setBooking, setError }) {
    const [flight, setFlight] = useState([]);

    const [form, setForm] = useState({
        origin: '',
        destination: ''
    });
    
    useEffect(() => {
        fetch('http://127.0.0.1:5000/flight', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                setFlight(data)
            })
            .catch(error => {
                console.error(error.message)
            });
    }, []);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');

        if (token) {
            const response = await fetch('http://127.0.0.1:5000/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.replace(/['"]+/g, '')}`
                },
                body: JSON.stringify({origin: form.origin, destination: form.destination})
            });

            const data = await response.json();

            setBooking(data);
        } else {
            setError(true);
        }
    }

    const option = (start, end) => {
        return flight.slice(start, end).map(value => (
            <option key={value.id} value={value.city}>
                {value.city}
            </option>
        ));
    }   

    return (
        <>
            <div className="bg-white p-12 shadow-2xl rounded-md mt-8">
                <div className="text-center font-bold text-4xl border-b-2 border-indigo-600 p-4 mb-8">Flight</div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row">
                        <div className="text-center lg:mr-12 lg:mb-0 md:mr-12 md:mb-0 sm:mr-12 sm:mb-0 mb-4">
                            <div className="font-bold text-2xl text-center mb-4">Origin</div>
                            <select 
                                className="rounded-md p-4 text-center" 
                                value={form.origin} 
                                onChange={handleChange}
                                name="origin"
                            >
                                {option(0, 5)}
                            </select>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-center mb-4">Destination</div>
                            <select 
                                className="rounded-md p-4 text-center mb-8" 
                                value={form.destination} 
                                onChange={handleChange}
                                name="destination"
                            >
                                {option(5, 10)}
                            </select>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="rounded-md p-4 w-full mb-4 hover:scale-110 transition duration-500 ease-out bg-indigo-600 text-white"
                    >
                        Continue
                    </button>
                </form>
                <Logout />
            </div>
        </>
    )
}
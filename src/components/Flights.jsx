import { useEffect, useState } from "react"

export default function Flights() {
    const [form, setForm] = useState(0);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/flights')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                return response.json();
            })
            .then(data => localStorage.setItem('flights', JSON.stringify(data)))
            .catch(error => console.error(error.message));
    }, []);

    const flights = JSON.parse(localStorage.getItem('flights'));

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({flight: form})
        })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            })
            .catch(error => console.error(error.message)); 
    }
    return (
        <>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>Flights</div>
                        <select value={form} onChange={(event) => setForm(event.target.value)}>
                            {flights.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.origin} - {value.destination}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Continue</button>
                    </form>
                </div>
            </div>
        </>
    )
}
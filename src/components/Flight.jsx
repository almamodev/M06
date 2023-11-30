import { useEffect, useState } from "react"

export default function Flight() {
    const [flight, setFlight] = useState([]);
    const [id, setId] = useState(0);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/flight', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                return response.json();
            })
            .then(data => setFlight(data))
            .catch(error => console.error(error.message));
    }, []);
    return (
        <>
            <form>
                <div>Flight</div>
                <select>
                    {flight.map((value, index) => (
                        <option key={index} value={value.id}>
                            
                        </option>
                    ))}
                </select>
            </form>
        </>
    )
}
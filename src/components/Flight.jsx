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

    const option = flight.map((value, index) => (
        <option key={index} value={value.id}>
            {value.city}
        </option>
    ));

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="bg-white p-12 shadow-2xl rounded-md">
                    <form>
                        <div className="flex flex-col sm:flex-row">
                            <div className="font-bold text-2xl text-center">Origin</div>
                            <select className="">
                                {option}
                            </select>
                            <div className="font-bold text-2xl text-center">Destination</div>
                            <select>
                                {option}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
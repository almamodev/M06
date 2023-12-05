import { useEffect, useState } from "react";
import Form from './Form';
import Error from '../Error';

export default function Home() {
    const [booking, setBooking] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('http://127.0.0.1:5000/booking', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.replace(/['"]+/g, '')}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
        } else {
            setError(true);
        }
    }, [booking]);
    
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <Form setBooking={setBooking} setError={setError} />
                {error && <Error message='Unauthorized' />}
            </div>
        </>
    )
}
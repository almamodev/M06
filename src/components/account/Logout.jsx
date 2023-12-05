import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <>
            <button 
                type="button" 
                onClick={handleClick}
                className="bg-yellow-300 text-white w-full p-4 rounded-md hover:scale-110 transition duration-500 ease-out"
            >
                Exit
            </button>
        </>
    )
}
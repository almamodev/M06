export default function Form({ handleSubmit, handleChange, value }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="rounded-md shadow-2xl p-12 bg-white">
                    <input 
                        type="text"
                        name="username"
                        value={value.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="border-2 p-4 rounded-md mb-4 text-center bg-slate-100"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={value.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="block border-2 p-4 rounded-md mb-8 text-center bg-slate-100"
                    />
                    <button 
                        type="submit" 
                        className="rounded-md p-4 w-full hover:scale-110 transition duration-500 ease-out bg-indigo-600 text-white"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </>
    )
} 
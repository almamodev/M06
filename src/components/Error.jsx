export default function Error({message}) {
    return (
        <>
            <div className="border-2 border-dashed border-red-600 p-4 rounded-md mt-8 font-bold text-red-600">{message}</div>
        </>
    )
}
export const InputBox =({ onChange ,label})=>{
    return <div className="flex mb-4 items-center justify-center  ">
        <label className="relative">
            <input onChange={onChange} type="text" className="px-4 py-2 text-sm outline-none border-2 border-gray-300 rounded
            focus:border-gray-300 duration-200 peer focus:border-indigo-700 bg-inherit" />
            
            <span className="absolute left-2 top-2 px-1 text-sm tracking-wide bg-white
            peer-focus:text-indigo-800 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
            peer-placeholder-shown:text-sm">{label}</span>
            </label>
    </div>
}




//-------------------

// export const InputBox =({ onChange ,label})=>{
//     return <div className="flex h-screen items-center justify-center bg-gray-200 ">
//         <label className="relative">
//             <input type="text" className="px-4 py-2 text-lg outline-none border-2 border-gray-200 rounded focus:border-gray-300 duration-200 peer focus:border-indigo-600 bg-inherit" />
//             <span className=" absolute left-0 top-2 px-1 text-lg uppercase 
//             tracking-wide peer-focus:text-indigo-600 pointer-events-none 
//             duration-200 peer-focus:text-sm peer-focus:-translate-y-5
//             bg-gray-200 ml-2 peer-valid:text-sm ">name</span>
//         </label>
//     </div>
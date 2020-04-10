import React, { useState } from 'react'

const ImageSearch = ({setSearch}) => {
    const [text,setText] = useState('')
    const onSubmit =(e)=>{
        e.preventDefault(); 
        setSearch(text);
    } 
    return (
        <div>
            <form onSubmit={onSubmit} class="w-full max-w-sm mx-auto my-5">
                <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search images.." aria-label="Full name" />
                    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch

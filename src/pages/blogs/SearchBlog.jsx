import React from 'react'

const SearchBlog = ({search, handleSearchChange, handleSearch}) => {

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className='w-[50%] flex m-auto border-b border-gray-200'>
            <input
                value={search}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                type='text'
                placeholder='Escribe el nombre del sitio o lugar que deseas encontrar'
                className='py-2 px-4  w-full bg-[#f7f8f9] focus:outline-none focus:border'
            />
            <button 
                className='bg-red-500 px-4 py-2 text-white'
                onClick={handleSearch}
            >
                Buscar
            </button>
        </div>
    )
}

export default SearchBlog
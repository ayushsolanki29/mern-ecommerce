import React from 'react'

import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Searching for:', searchTerm);
        setSearchTerm(''); // Clear the input after search
        setIsOpen(false); // Close the search bar after search
    }
    
    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'}`}>
            {
                isOpen ? (<form onSubmit={handleSubmit} className='relative flex items-center justify-center w-full'>
                    <div className='relative w-1/2'>
                        <input type="text" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className='bg-gray-100 rounded-lg focus:outline-none w-full placeholder:text-gray-700 px-4 py-2 pl-2 pr-12' />
                        <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                            <HiMagnifyingGlass className='h-6 w-6 text-gray-700' />
                        </button>
                    </div>
                    <button type='button' onClick={handleSearchToggle} className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'>
                        <HiMiniXMark className='h-6 w-6 text-gray-700' />
                    </button>
                </form>) :
                    (<button onClick={handleSearchToggle}>
                        <HiMagnifyingGlass className='h-6 w-6 text-gray-700' />
                    </button>)
            }
        </div>
    )
}

export default SearchBar

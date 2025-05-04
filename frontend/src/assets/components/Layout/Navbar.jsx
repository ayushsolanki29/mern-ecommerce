import React from 'react'
import { HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to={"/"} className='text-2xl font-medium'>Rabbit</Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>   Men </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>   women </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>   top wear </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>   bottom wear </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to={"/profile"} className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                    </Link>
                    <Link to={"/profile"} className='hover:text-black'>
                        <HiOutlineShoppingBag />
                    </Link>
                    <Link to={"/profile"} className='hover:text-black'>
                        <HiBars3BottomRight />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar

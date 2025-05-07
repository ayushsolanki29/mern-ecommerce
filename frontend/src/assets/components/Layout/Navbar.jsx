import React from 'react'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from '../Common/SearchBar'
import CartDrawer from './CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
    {/* make array of object store this category */ }
    const categories = [
        {
            id: 1,
            name: "men",
            url: "#",

        },
        {
            id: 2,
            name: "women",
            url: "#",

        },
        {
            id: 3,
            name: "topwear",
            url: "#",
        },
        {
            id: 4,
            name: "bottomwear",
            url: "#",
        },
        {
            id: 5,
            name: "footwear",
            url: "#",
        },
        {
            id: 6,
            name: "accessories",
            url: "#",
        },
        {
            id: 7,
            name: "sale",
            url: "#",
        },
        {
            id: 8,
            name: "new arrivals",
            url: "#",
        },
        {
            id: 9,
            name: "trending",
            url: "#",
        },
        {
            id: 10,
            name: "brands",
            url: "#",
        },
        {
            id: 11,
            name: "collections",
            url: "#",
        },
        {
            id: 12,
            name: "gifts",
            url: "#",
        },
        {
            id: 13,
            name: "home & living",
            url: "#",
        },
        {
            id: 14,
            name: "beauty & personal care",
            url: "#",
        },
        {
            id: 15,
            name: "sports & fitness",
            url: "#",
        },
    ]
    const handleNavDrawerToggle = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <>
<nav className="container mx-auto flex items-center justify-between py-2 px-4">
  {/* Logo */}
  <div>
    <Link to="/" className="text-xl font-semibold">Rabbit</Link>
  </div>

  {/* Scrollable Category Slider */}
  <div className="hidden md:block w-full ml-7 mr-7 overflow-x-auto overflow-y-hidden scrollbar-hide">
  <div className="flex space-x-4 items-center whitespace-nowrap">
    {categories.map((category) => (
      <Link
        to={category.url}
        key={category.id}
        className="text-sm font-medium text-gray-700 hover:text-black uppercase"
      >
        {category.name}
      </Link>
    ))}
  </div>
</div>


  {/* Icons */}
  <div className="flex items-center space-x-3">
    <Link to="/profile">
      <HiOutlineUser className="h-5 w-5 text-gray-700 hover:text-black" />
    </Link>
    <button className="relative" onClick={handleDrawerToggle}>
      <HiOutlineShoppingBag className="h-5 w-5 text-gray-700 hover:text-black" />
      <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold rounded-full px-[5px]">
        3
      </span>
    </button>
    <div className="hidden sm:block">
      <SearchBar />
    </div>
    <button onClick={handleNavDrawerToggle} className="md:hidden">
      <HiBars3BottomRight className="h-5 w-5 text-gray-700 hover:text-black" />
    </button>
  </div>
</nav>


            <CartDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
            <div className={`fixed top-0 left-0 w-full h-full  bg-opacity-50 transition-opacity duration-300 ${navDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleNavDrawerToggle}>
                <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center justify-between p-4 border-b'>
                        <h2 className='text-xl font-semibold'>Categories</h2>
                        <button onClick={handleNavDrawerToggle} className='text-gray-700 hover:text-black'>
                            <IoMdClose className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='p-4 space-y-2'>
                        {categories.map((category) => (
                            <Link to={category.url} key={category.id} className='block text-gray-700 hover:text-black text-sm font-medium uppercase'>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar

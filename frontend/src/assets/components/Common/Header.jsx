import React from 'react'
import Navbar from '../Layout/Navbar'
import TopBar from '../Layout/TopBar'

const Header = () => {
  return (
    <header className='border-b border-gray-200 shadow-sm'>
      {/* topbar */}
      <TopBar/>
      {/* navbar */}
      <Navbar/>
      {/* cart drwver */}
    </header>
  )
}

export default Header

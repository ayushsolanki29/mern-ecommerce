import React from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';

const CartDrawer = ({drawerOpen,handleDrawerToggle }) => {

  return (
    <div className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:w-1/4 sm:w-1/2 transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <h2 className='text-lg font-semibold'>Shopping Cart</h2>
            <button onClick={handleDrawerToggle} className='text-gray-700 hover:text-black cursor-pointer'>
               <IoMdClose className='h-6 w-6'/>
            </button>
        </div>
        <div className='flex-grow p-4 overflow-y-auto'>
            <CartContent/>
        </div>
      {/* checkout button  */}
      <div className='p-4 bg-white sticky bottom-0'>
        <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 cursor-pointer transition'>
            Checkout
        </button>
        <p className='text-sm tracking-tighter text-gray-500 mt-2 text-start'>
            Shipping,taxes and discount codes calculated at checout.
        </p>
      </div>
    </div>
  )
}

export default CartDrawer

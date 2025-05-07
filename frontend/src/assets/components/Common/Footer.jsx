import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const Footer = () => {
    return (
        <footer className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                        Newsletter
                    </h3>
                    <p>
                        Subscribe to our newsletter to get the latest updates and offers.
                    </p>
                    <p>
                        Signup and get 10% off your first order.
                    </p>
                    <form className='mt-4'>
                        <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-lg px-4 py-2 w-full' />
                        <button type='submit' className='bg-black text-white rounded-lg px-4 py-2 mt-2'>Subscribe</button>
                    </form>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                        Customer Service
                    </h3>
                    <ul className='space-y-2'>
                        <li><a href="#" className='text-gray-600 hover:text-black'>Contact Us</a></li>
                        <li><a href="#" className='text-gray-600 hover:text-black'>Shipping & Returns</a></li>
                        <li><a href="#" className='text-gray-600 hover:text-black'>Privacy Policy</a></li>
                        <li><a href="#" className='text-gray-600 hover:text-black'>Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                        About Us
                    </h3>
                    <p>
                        We are a leading e-commerce platform offering a wide range of products to our customers.
                    </p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                        Follow Us
                    </h3>
                    {/* make icons for social media links and also add call us option with  number
                     */}
                    <div className='flex items-center space-x-4'>
                        <a href="#" className='hover:text-gray-800'>
                            <TbBrandMeta className='h-5 w-5' />
                        </a>
                        <a href="#" className='hover:text-gray-800'>
                            <IoLogoInstagram className='h-5 w-5' />
                        </a>
                        <a href="#" className='hover:text-gray-800'>
                            <RiTwitterXLine className='h-5 w-5' />
                        </a>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-lg  mb-2 text-gray-800'>
                            Call Us
                        </h3>

                        <a href="tel:+1234567890" className='text-gray-600 font-bold hover:text-black flex gap-2 items-center'>
                            <FiPhoneCall className='size-5' />  +1234567890
                        </a>
                    </div>
                </div>
            </div>
            {/* copyright  */}
            <div className='text-center mt-5'>
                <p className='text-gray-600 text-sm'>
                    &copy; {new Date().getFullYear()} rabbit.com | All rights reserved.
                </p>
            </div>

        </footer>


    )
}

export default Footer

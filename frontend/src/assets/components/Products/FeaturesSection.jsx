import React from 'react'
import { HiArrowPathRoundedSquare, HiCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeaturesSection = () => {
    const features = [
        {
            icon: <HiShoppingBag className='text-4xl text-gray-800' />,
            title: 'Free International Shipping',
            description: 'on all orders over $100'
        },
        {
            icon: <HiArrowPathRoundedSquare className='text-4xl text-gray-800' />,
            title: '45 Days Return',
            description: 'Hassle-free returns within 45 days'
        },
        {
            icon: <HiCreditCard className='text-4xl text-gray-800' />,
            title: 'SECURE Checkout',
            description: 'Your payment information is safe with us'
        },
    ]
    return (
        <section className="py-16 px-4 lg:px-0 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 py-12">
  {features.map((feature, index) => (
    <div
      key={index}
      className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4 text-4xl flex justify-center text-gray-800">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
        {feature.title}
      </h3>
      <p className="text-gray-700 text-base">
        {feature.description}
      </p>
    </div>
  ))}
</div>

        </section>
    )
}

export default FeaturesSection

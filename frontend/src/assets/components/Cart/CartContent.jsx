import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 15,
            image: "https://picsum.photos/200/200?random=1"
        },
        //get fake data
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            price: 30,
            image: "https://picsum.photos/200/200?random=2"
        },
        {
            productId: 3,
            name: "Shoes",
            size: "10",
            color: "Black",
            price: 50,
            image: "https://picsum.photos/200/200?random=3"
        },
        {
            productId: 4,
            name: "Hat",
            size: "M",
            color: "Green",
            price: 20,
            image: "https://picsum.photos/200/200?random=4"
        },
        {
            productId: 5,
            name: "Socks",
            size: "L",
            color: "White",
            price: 5,
            image: "https://picsum.photos/200/200?random=5"
        },
        {
            productId: 6,
            name: "Jacket",
            size: "XL",
            color: "Gray",
            price: 100,
            image: "https://picsum.photos/200/200?random=6"
        },
        {
            productId: 7,
            name: "Shorts",
            size: "M",
            color: "Yellow",
            price: 25,
            image: "https://picsum.photos/200/200?random=7"
        },
        {
            productId: 8,
            name: "Sweater",
            size: "L",
            color: "Purple",
            price: 40,
            image: "https://picsum.photos/200/200?random=8"
        },


    ]
    return (
        <div className="p-4 max-w-3xl mx-auto">
       
      
        {cartProducts.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">Your cart is currently empty.</p>
        ) : (
          cartProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-gray-200"
            >
              {/* Product Details */}
              <div className="flex items-start gap-3 w-full md:w-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
                <div className="space-y-0.5">
                  <h2 className="text-base font-medium">{product.name}</h2>
                  <p className="text-xs text-gray-500">
                    Size: {product.size} | Color: {product.color}
                  </p>
      
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 mt-1">
                    <button className="w-7 h-7 border text-sm border-gray-300 rounded hover:bg-gray-100">
                      -
                    </button>
                    <span className="text-sm px-2">1</span>
                    <button className="w-7 h-7 border text-sm border-gray-300 rounded hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>
              </div>
      
              {/* Price & Actions */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-2 w-full md:w-auto justify-between">
                <p className="text-base font-semibold text-gray-800">${product.price}</p>
                <button className="text-red-500 hover:text-red-600 transition">
                  <RiDeleteBin3Line className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
    )
}

export default CartContent

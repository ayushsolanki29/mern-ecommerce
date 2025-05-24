
const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                    {/* Background Glossy Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl z-0 pointer-events-none"></div>

                    {/* Product Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-48 object-cover transition duration-300 hover:scale-105 rounded-xl"
                            />
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-gray-700 font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>

                        {/* Price & Button */}
                        <div className="mt-auto">
                            <p className="text-gray-700 text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
                            <button className="w-full bg-gray-900 text-white font-medium py-2 rounded-lg  transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ProductGrid

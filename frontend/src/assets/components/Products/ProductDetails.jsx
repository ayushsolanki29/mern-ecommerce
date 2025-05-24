import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  id: 1,
  name: "Jacket",
  price: 100,
  originalPrice: 200,
  description: "This is a jacket that is very warm and comfortable.",

  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["red", "blue", "green"],
  images: [{
    url: "https://picsum.photos/300/300?random=1123",
    altText: "Jacket 1",

  }, {
    url: "https://picsum.photos/300/300?random=1234",
    altText: "Jacket 2",

  }, {
    url: "https://picsum.photos/300/300?random=1412",
    altText: "Jacket 3",
  }
  ]
}
const simmilarProducts = [
  {
    id: 2,
    name: "Jacket 2",
    price: 120,
    images: [{ url: "https://picsum.photos/300/300?random=11" }]
  },
  {
    id: 3,
    name: "Jacket 3",
    price: 150,
    images: [{ url: "https://picsum.photos/300/300?random=12" }]
  },
  {
    id: 4,
    name: "Jacket 4",
    price: 130,
    images: [{ url: "https://picsum.photos/300/300?random=13" }]
  },
  {
    id: 5,
    name: "Jacket 5",
    price: 140,
    images: [{ url: "https://picsum.photos/300/300?random=14" }]
  }
]
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [ButtonDisabled, setIsButtonDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct.images]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);

  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.", {

        duration: 3000,
        style: {
          backgroundColor: "#f8d7da",
          color: "#721c24",
        },
      });

      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart successfully!", {
        duration: 3000,
        style: {
          backgroundColor: "#d4edda",
          color: "#155724",
        },
      });
      setIsButtonDisabled(false);
    }, 1000);

  }

  return (
    <div className='p-6'>
      <div className='max-w-6xl mx-auto flex md:flex-row flex-col bg-white rounded-lg'>
        {/* Left Thumbnails (Desktop) */}
        <div className='hidden md:flex flex-col space-y-4 mr-6'>
          {selectedProduct.images.map((image, index) => (
            <img
              key={index}
              onClick={() => setMainImage(image.url)}
              src={image.url}
              alt={image.altText || `thumbnail ${index}`}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className='md:w-1/2'>
          <div className='mb-4'>
            <img
              src={mainImage}
              alt="Main Product"
              className='w-full h-auto object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Mobile Thumbnails */}
        <div className='md:hidden flex space-x-4 mb-4'>
          {selectedProduct.images.map((image, index) => (
            <img
              key={index}
              onClick={() => setMainImage(image.url)}
              src={image.url}
              alt={image.altText || `thumbnail ${index}`}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Product Details */}
        <div className='md:w-1/2 md:ml-10'>
          <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
            {selectedProduct.name}
          </h1>
          <p className='text-lg text-gray-600 mb-1 line-through'>
            {selectedProduct.originalPrice}
          </p>
          <p className='text-xl text-gray-500 mb-2'>${selectedProduct.price}</p>
          <p className='text-gray-600 mb-4'>{selectedProduct.description}</p>

          {/* Colors */}
          <div className='mb-4 flex items-center'>
            <p className='text-gray-700 mr-2'>Colors:</p>
            <div className='flex space-x-2'>
              {selectedProduct.colors.map((color, index) => (
                <span
                  key={index}
                  onClick={() => handleColorSelect(color)}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-black" : "border-gray-300"
                    } ${color === "red"
                      ? "bg-red-500"
                      : color === "blue"
                        ? "bg-blue-500"
                        : color === "green"
                          ? "bg-green-500"
                          : ""
                    }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className='mb-4 flex items-center'>
            <p className='text-gray-700 mr-2'>Sizes:</p>
            <div className='flex space-x-2'>
              {selectedProduct.sizes.map((size, index) => (
                <span
                  key={index}
                  onClick={() => handleSizeSelect(size)}
                  className={`border rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200 ${selectedSize === size ? "border-2 border-black" : "border-gray-300"
                    }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className='mb-6'>
            <p className='text-gray-700 mb-2'>Quantity:</p>
            <div className='flex items-center'>
              <button
                onClick={decreaseQuantity}
                className='px-2 py-1 bg-gray-200 rounded text-lg'
              >
                -
              </button>
              <span className='text-lg mx-3'>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className='px-2 py-1 bg-gray-200 rounded text-lg'
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className='bg-black text-white py-4 px-6 rounded w-full mb-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={ButtonDisabled}
          >
            Add to Cart
          </button>

          {/* Characteristics */}
          <div className='mt-10 text-gray-700'>
            <h3 className='text-xl font-semibold mb-4'>Characteristics:</h3>
            <table className='w-full text-left text-sm text-gray-600'>
              <tbody>
                <tr>
                  <td className='py-2 font-semibold'>Brand:</td>
                  <td className='py-2'>{selectedProduct.brand}</td>
                </tr>
                <tr>
                  <td className='py-2 font-semibold'>Material:</td>
                  <td className='py-2'>{selectedProduct.material}</td>
                </tr>
                <tr>
                  <td className='py-2 font-semibold'>Description:</td>
                  <td className='py-2'>{selectedProduct.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid products={simmilarProducts} />
      </div>
    </div>
  );
};



export default ProductDetails

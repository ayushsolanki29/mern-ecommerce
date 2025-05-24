import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArravials = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStartLeft, setScrollStartLeft] = useState(0);

    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    const scroll = (direction) => {
        const scrollAmount = direction === 'left' ? -300 : 300;
        const container = scrollRef.current;
        if (container) {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const left = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            setCanScrollLeft(left > 0);
            setCanScrollRight(left < maxScrollLeft);
        }
    };
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollStartLeft(scrollRef.current.scrollLeft);
        
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the scroll speed
        scrollRef.current.scrollLeft = scrollStartLeft - walk;
    }
    const handleMouseUp = () => {
        setIsDragging(false);
        setStartX(0);
    }
    const handleMouseLeave = () => {
        setIsDragging(false);
        setStartX(0);
    }
    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons(); // Initial check
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', updateScrollButtons);
            }
        };
    }, []);

    const newArravils = [
        {
            _id: "1",
            name: "Leather Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=1",
                    alt: "Leather Jacket",
                },
            ],
        },
        {
            _id: "2",
            name: "Denim Jeans",
            price: 80,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=2",
                    alt: "Denim Jeans",
                },
            ],
        },
        {
            _id: "3",
            name: "White Sneakers",
            price: 95,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=3",
                    alt: "White Sneakers",
                },
            ],
        },
        {
            _id: "4",
            name: "Graphic T-Shirt",
            price: 40,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=4",
                    alt: "Graphic T-Shirt",
                },
            ],
        },
        {
            _id: "5",
            name: "Hooded Sweatshirt",
            price: 60,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=5",
                    alt: "Hooded Sweatshirt",
                },
            ],
        },
        {
            _id: "6",
            name: "Cargo Pants",
            price: 75,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=6",
                    alt: "Cargo Pants",
                },
            ],
        },
        {
            _id: "7",
            name: "Beanie Hat",
            price: 25,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=7",
                    alt: "Beanie Hat",
                },
            ],
        },
        {
            _id: "8",
            name: "Wool Coat",
            price: 150,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=8",
                    alt: "Wool Coat",
                },
            ],
        },
        {
            _id: "9",
            name: "Classic Watch",
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/300/300?random=9",
                    alt: "Classic Watch",
                },
            ],
        },
    ];

    return (
        <section className='py-16 px-4 lg:px-0 '>
            <div className='container mx-auto text-center mb-10 relative'>

         
            <h2 className='text-3xl font-bold mb-4'>
                Explore  New Arrivals
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest trends and styles in our new arrivals collection. Shop now and elevate your wardrobe with fresh looks that are perfect for any occasion.
            </p>
            {/* Scroll buttons */}
            <div className='absolute right-0 bottom-[-30px] flex space-x-2 select-none' >
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300 ${canScrollLeft ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'
                        }`}
                >
                    <FiChevronLeft className="text-2xl" />
                </button>

                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300 ${canScrollRight ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'
                        }`}
                >
                    <FiChevronRight className="text-2xl" />
                </button>

            </div>
            <div ref={scrollRef} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            
            className={`container mx-auto overflow-x-auto pb-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} `}>
                <div className="flex space-x-6 px-4 sm:px-6 lg:px-8">
                    {newArravils.map((product) => (
                        <div
                            key={product._id}
                            className="min-w-[80%] sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%] bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative group"
                        >
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={product.images[0]?.url}
                                    alt={product.images[0]?.alt || product.name}
                                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    draggable="false"
                                />
                            </div>
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-b-xl">
                                <Link to={`/products/${product._id}`} className="block">
                                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-white truncate">{product.name}</h4>
                                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
   </div>
        </section>
    )
}

export default NewArravials

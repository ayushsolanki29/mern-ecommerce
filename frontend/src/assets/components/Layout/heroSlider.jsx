
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { assets } from '../../images/images'


export default function HeroSlider() {
    const heroSlides = [
        {
            image: assets.hero1,
            title: 'Vacation Ready',
            description:
                'Get ready for your next adventure with our stylish and comfortable vacation outfits. Shop now and make a statement on your next trip!',
            buttonText: 'Shop Now',
            link: '#',
        },
        {
            image: assets.hero2,
            title: 'Explore New Looks',
            description:
                'Discover the latest trends in vacation wear. Unleash your wanderlust in style!',
            buttonText: 'Discover',
            link: '#',
        },
        {
            image: assets.hero3,
            title: 'Sunny Escapes',
            description:
                'Pack light, travel far. Find your perfect outfit for sun-soaked destinations.',
            buttonText: 'Browse Collection',
            link: '#',
        },
    ]
    return (
        <section className="relative">
            <Swiper loop autoplay={{ delay: 4000 }} className="w-full h-[400px] md:h-[600px] lg:h-[720px]">
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img src={slide.image} alt={slide.title} className="w-full h-[400px] md:h-[600px] lg:h-[720px] object-cover" />
                            <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                                <div className="text-center text-white p-6">
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-sm tracking-tighter md:text-lg mb-6">{slide.description}</p>
                                    <Link
                                        to={slide.link}
                                        className="bg-rabbit-red text-white py-2 px-4 rounded-full hover:bg-rabbit-red-dark transition duration-300 inline-block"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

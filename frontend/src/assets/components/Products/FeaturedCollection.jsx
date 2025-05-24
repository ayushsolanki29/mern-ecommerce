import { Link } from "react-router-dom"
import { assets } from "../../images/images"

const FeaturedCollection = () => {
    return (
       <section className="py-16 px-4 lg:px-0 bg-white">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-[2rem] bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl overflow-hidden">
    
    {/* Left Content */}
    <div className="lg:w-1/2 p-8 text-center lg:text-left z-10">
      <h2 className="text-base font-semibold text-gray-600 mb-2 tracking-wide uppercase">
        Comfort and Style
      </h2>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Apparel made for your everyday life
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Elevate your daily wear with effortless comfort and timeless design.
        Our pieces are made to move with you and for you — every day.
      </p>
      <Link
        to="/collections/all"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition-all duration-300"
      >
        Shop Now
      </Link>
    </div>

    {/* Right Content */}
    <div className="lg:w-1/2 p-8 z-10">
      <img
        src={assets.featuredImage}
        alt="Featured"
        className="w-full h-auto rounded-2xl object-cover shadow-md"
      />
    </div>
  </div>
</section>


    )
}

export default FeaturedCollection

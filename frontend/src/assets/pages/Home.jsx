
import Hero from '../components/Layout/Hero'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import GenderCollection from '../components/Products/GenderCollection'
import NewArravials from '../components/Products/NewArravials'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'

const placeholderProducts = [
    {
        id: 1,
        name: "Placeholder Product 1",
        price: 29.99,
        images: [{ url: "https://picsum.photos/300/300?random=1" }],
        description: "This is a placeholder product description.",
    },
    {
        id: 2,
        name: "Placeholder Product 2",
        price: 39.99,
        images: [{ url: "https://picsum.photos/300/300?random=2" }],
        description: "This is another placeholder product description.",
    },
    {
        id: 3,
        name: "Placeholder Product 3",
        price: 49.99,
        images: [{ url: "https://picsum.photos/300/300?random=3" }],
        description: "This is yet another placeholder product description.",
    },
    {
        id: 4,
        name: "Placeholder Product 4",
        price: 59.99,
        images: [{ url: "https://picsum.photos/300/300?random=4" }],
        description: "This is a different placeholder product description.",
    },
    {
        id: 5,
        name: "Placeholder Product 5",
        price: 69.99,
        images: [{ url: "https://picsum.photos/300/300?random=5" }],
        description: "This is a unique placeholder product description.",
    },{
        id: 6,
        name: "Placeholder Product 6",
        price: 79.99,
        images: [{ url: "https://picsum.photos/300/300?random=6" }],
        description: "This is a special placeholder product description.",
    }


]
const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArravials />
            <h2 className='text-3xl font-bold mb-4 text-center'>
                Best Seller
            </h2>
            <ProductDetails />
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold mb-4 text-center' >
                    Top Wears for Women
                </h2>
                <ProductGrid products={placeholderProducts} />
            </div>
            <FeaturedCollection/>
            <FeaturesSection/>
        </div>
    )
}

export default Home

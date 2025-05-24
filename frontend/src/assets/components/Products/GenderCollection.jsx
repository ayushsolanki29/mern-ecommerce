import { assets } from "../../images/images"
import CollectionCard from "./CollectionCards"

const GenderCollection = () => {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                <CollectionCard
                    title="Male Collection"
                    image={assets.hero_male}
                    link="/collections/male"
                />
                <CollectionCard
                    title="Womens Collection"
                    image={assets.hero_female}
                    link="/collections/female"
                />
                <CollectionCard
                    title="Summer Collection"
                    image={assets.hero_summer}
                    link="/collections/summer"
                />

            </div>
        </section>
    )
}

export default GenderCollection

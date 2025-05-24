import { Link } from 'react-router-dom';

export default function CollectionCard({ title, image, link }) {
    return (
        <Link to={link} className="group relative block w-full overflow-hidden rounded-xl shadow-lg">
            <img
                src={image}
                alt={title}
                className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h2 className="text-3xl font-bold uppercase tracking-wide mb-2 drop-shadow-md">
                        {title}
                    </h2>
                    <span className="inline-block mt-2 bg-white text-black text-sm font-medium px-5 py-2 rounded-full transition-transform transform group-hover:scale-105 group-hover:shadow-md">
                        View Collection
                    </span>
                </div>
            </div>
        </Link>
    );
}

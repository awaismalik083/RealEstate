import React from 'react';
import { useAppContext } from '../Context/Context.jsx';
import { asset } from '../assets/asset.js';

const ListSection = () => {
    const { list_places, card } = useAppContext();

    // Sort card array to place "Downtown Dubai" first
    const sortedCards = [...card].sort((a, b) =>
        a.location.includes("Downtown Dubai") ? -1 : 1
    );

    return (
        <div className="py-16 px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900">Explore our listings</h1>
            <p className="text-gray-500 text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-20">
                {list_places.map((place, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={place.Image}
                            className="w-28 h-28 object-cover rounded-full border-2 border-gray-200 shadow"
                            alt={place.name}
                        />
                        <h3 className="mt-4 font-semibold text-gray-800">{place.name}</h3>
                        <p className="text-sm text-gray-500">{place.listings}</p>
                    </div>
                ))}
            </div>

            <h1 className="mt-16 text-gray-800 font-bold text-3xl">Discover The Latest Real Estate</h1>
            <p className="text-gray-500 text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
            </p>

            <div className="mt-12 grid grid-cols-1 w-[60rem] mx-45 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {sortedCards.map((place, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
                    >
                        <div className="relative">
                            <img
                                src={place.Image}
                                alt={place.title}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                Featured
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{place.title}</h3>
                            <p className="text-sm mb-1.5 text-gray-500 ml-[15px] absolute left-0">{place.location}</p>
                            <p className="text-xl font-bold text-red-500 mt-2">{place.price}</p>
                            <div className="flex justify-between text-sm text-gray-600 mt-6">
                                <span>🛏️ {place.beds} Beds:4</span>
                                <span>🛁 {place.baths} Baths:2</span>
                                <span>📏 {place.area} Sqft:1150</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button className="text-red-500 font-semibold hover:underline">
                                    + Compare
                                </button>
                                <span className="text-sm text-gray-500">{place.timePosted}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-16 flex flex-col  lg:flex-row">
                {/* Left Side - Image */}
                <div className="lg:w-1/2 ">
                    <img
                        src={asset.bg1}
                        alt="Modern house with pool"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                {/* Right Side - Content */}
                <div className="lg:w-1/2 bg-rose-300 p-8  flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        Explore Your Dream Home or Boost Your Investment Portfolio Today - Your Future Awaits!
                    </h2>
                    <p className="text-gray-500 text-sm mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio
                    </p>
                    <div className="mt-8 flex flex-col  sm:flex-row gap-3">
                        {/* Agent Card 1 */}
                        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Darlene Robertson</h4>
                                <button className="text-red-500 font-semibold hover:underline">
                                    Contact Seller
                                </button>
                            </div>
                        </div>
                        {/* Agent Card 2 */}
                        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Darlene Robertson</h4>
                                <button className="text-red-500 font-semibold hover:underline">
                                    Contact Seller
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListSection;
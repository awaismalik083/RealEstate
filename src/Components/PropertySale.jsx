import React from 'react'
import { useAppContext } from '../Context/Context'
import { asset } from '../assets/asset'

const PropertySale = () => {
    const { card2, Logos, Sellers, blog } = useAppContext()

    const sortedCards = [...card2].sort((a, b) =>
        a.location.includes("Downtown Dubai") ? -1 : 1
    )

    return (
        <>
            <div className="flex justify-center">
                <h1 className='text-5xl text-gray-900 font-bold'>Properties For Sale</h1>
            </div>
            <p className='flex justify-center mt-3 font-semibold text-gray-400 tracking-[.07em] text-[10px]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cumque et rerum illo ipsum
            </p>

            <div className="mt-12 grid grid-cols-1 w-[60rem] mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-20">
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
                            <p className="text-sm text-gray-500 mt-1">{place.location}</p>
                            <p className="text-xl font-bold text-red-500 mt-2">{place.price}</p>
                            <div className="flex justify-between text-sm text-gray-600 mt-6">
                                <span>🛏️ {place.beds} Beds:4</span>
                                <span>🛁 {place.baths} Baths:1</span>
                                <span>📏 {place.area} Sqft:1900</span>
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
            <div className="">
                <h1 className='flex justify-center mt-10 text-gray-900 font-black text-[16px]'>Trusted by over 150+major companies</h1>
                <div className="flex flex-wrap justify-center gap-20 mt-6">
                    {Logos.map((item, index) => (
                        <div key={index} className=" flex justify-between ">
                            <img src={item.Image} alt={`Company logo ${index}`} className="h-10 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mt-10 text-4xl tracking-wider text-gray-900 font-bold justify-center">
                <h1>Meet The Agents</h1>
            </div>
            <p className='text-gray-400 flex justify-center mt-2 text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis </p>
            <div className=" flex justify-center mt-10">
                {
                    Sellers.map((item, index) => {
                        return (

                            <div key={index} className="relative gap-5">
                                <img className='w-[20rem] mx-12' src={item.Image} alt="" />
                                <p className='absolute py-5 ml-12 font-semibold text-gray-800'>{item.name}</p>
                                <p className='py-13 text-[10px] mx-12 left-0 absolute'>{item.description}</p>

                                <div className="flex absolute mt-[23px] gap-4 right-0 mr-[50px]">
                                    <div className="bg-gray-300 rounded-full p-2">

                                        <img className="w-4 h-4" src={asset.mail} alt="mail" />
                                    </div>
                                    <div className="bg-gray-300 rounded-full p-2">
                                        <img className="w-4 h-4" src={asset.phone} alt="phone" />
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-20">
                <h1 className="text-4xl font-bold text-gray-800 mt-4">Form our blog</h1>
            </div>
            <p className="flex justify-center text-sm text-gray-400 mt-3 text-center max-w-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio
            </p>

            <div className="flex flex-wrap justify-center gap-20 mt-10">
                {blog.map((pic, index) => (
                    <div key={index} className="w-[300px] rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src={pic.Image} alt="Blog" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="absolute top-36 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-md flex items-center gap-2 shadow-sm">
                                <p className="text-sm font-semibold">April</p>
                                <img src={asset.folder} alt="folder" className="w-4 h-4" />
                                <p className="text-sm font-semibold text-red-600">Housing</p>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <p className="font-semibold text-[15px] leading-tight">
                                {pic.description.split('\n')[0]}
                                <br />
                                {pic.description.split('\n')[1]}
                            </p>

                            <div className="flex items-center justify-center gap-2 mt-3">
                                <p className='text-red-500 font-semibold text-[13px]'>Read More</p>
                                <img className='cursor-pointer w-[25px] h-[25px]' src={asset.right} alt="arrow" />
                            </div>


                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default PropertySale

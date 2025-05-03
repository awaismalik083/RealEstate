import React, { useState } from 'react'
import { asset } from '../assets/asset'

const Hero = () => {
    const [selectedTab, setSelectedTab] = useState('rent');
    const categories = [
        { name: 'Houses', icon: asset.home },
        { name: 'Villa', icon: asset.villa },
        { name: 'Office', icon: asset.office },
        { name: 'Apartments', icon: asset.apartment },
    ];

    return (
        <>
            <div className="relative">
                <img src={asset.bg} alt="" className="w-fit object-fill" />
                <div className="absolute top-0 left-0 w-full flex justify-between px-4">
                    <div className='text-white pl-16 m-[117px]'>
                        <h1 className='text-5xl font-bold'>Find Your Perfect <br />Property With Us</h1>
                        <p className='w-[19rem] font-bold mt-3 text-[10px]'>
                            Discover Your Dream Property With Us - Where Perfect Meets Possible in Every Home
                        </p>
                    </div>

                    <div className="">
                        <div className='bg-white text-black w-[350px] rounded-xl mt-[93px] mr-[20px] p-4 shadow-lg'>
                            {/* Tabs */}
                            <div className="flex absolute top-0 mt-[47px] mb-3">
                                <button
                                    onClick={() => setSelectedTab('rent')}
                                    className={`px-4 py-1 h-[47px] w-[76px] rounded-tl-lg 
                                    ${selectedTab === 'rent' ? 'bg-red-600 text-white' : 'bg-pink-200 text-black'}`}>
                                    Rent
                                </button>
                                <button
                                    onClick={() => setSelectedTab('buy')}
                                    className={`px-4 py-1 h-[47px] w-[76px] rounded-tr-lg 
                                    ${selectedTab === 'buy' ? 'bg-red-600 text-white' : 'bg-pink-200 text-black'}`}>
                                    Buy
                                </button>
                            </div>

                            {/* Inputs */}
                            <div className="flex flex-col mr-[55px] w-full gap-6 mt-[10px]">
                                <input
                                    className='border border-gray-300 rounded-lg h-14 px-3 placeholder:text-gray-400 text-sm'
                                    type="text"
                                    placeholder='Type keyword...'
                                />
                                <select className='border border-gray-300 rounded-lg h-14 px-3 text-sm'>
                                    <option>Property type</option>
                                </select>
                                <select className='border border-gray-300 rounded-lg h-14 px-3 text-sm'>
                                    <option>Location</option>
                                </select>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-center  gap-2 mt-6">
                                <button className="bg-pink-200 text-black flex items-center justify-center px-4 py-2 rounded-lg w-1/2 text-sm font-semibold">
                                    Filters <span className="ml-1"><img className='w-4 mt-1' src={asset.filter} alt="" /></span>
                                </button>
                                <button className="bg-red-600 text-white flex items-center justify-center px-4 py-2 rounded-lg w-1/2 text-sm font-semibold">
                                    Search Now <span className="ml-3"><img className='w-4 mt-0.5' src={asset.search} alt="" /></span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 rounded-[5px] flex-row w-[355px] h-8 bg-black opacity-80 flex justify-center gap-10 items-center">
                            {
                                categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 text-white text-[10px]"
                                    >

                                        <img className='w-4  fill-black ' src={item.icon} alt={item.name} />


                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero

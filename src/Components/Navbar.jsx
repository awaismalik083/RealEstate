import React from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../assets/asset.js'
const Navbar = () => {
    return (
        <>
            <div className=" flex top-0   relative mt-0  justify-center">
                <div className="absolute left-0   ml-7 ">
                    <Link to='/'><img className='w-[7rem] mt-5' src={asset.logo} alt="" /></Link>
                </div>


                <div className=" mr-[10rem] ">
                    <nav>
                        <ul className='flex  font-semibold text-gray-950 justify-center  align-middle gap-10  relative p-6'>

                            <Link to='/'>Home</Link>
                            <Link to='/property'>Property</Link>
                            <Link to='/page'>Page</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/contact'>Contact</Link>
                            
                        </ul>
                    </nav>
                </div>



                <div className=" absolute  gap-9 mt-2.5  right-0 mr-4 flex justify-center">
                    <button className='flex   cursor-pointer text-gray-800 justify-center gap-1 mt-2.5 '><img className='size-6' src={asset.user} alt="" /> <span className=''>Register/Login</span></button>
                    <button className='flex  cursor-pointer text-white justify-center py-3  gap-4 rounded-xl bg-red-600 w-[10rem]'><img  className='mt-1 size-4' src={asset.home} alt="" /> Sell Property</button>
                </div>
            </div>

        </>

    )
}

export default Navbar
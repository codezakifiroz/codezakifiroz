import React from 'react'
import '../App.css'
import ProfileImg from '/image/ProfileImg.jpg'
import { CiLinkedin } from "react-icons/ci";

function HeroPage() {

    return (
        <div className='w-full h-[35rem] bg-[#f9f9f9] '>

            <div className='grid grid-cols-2 w-4/5 m-auto h-full mt-1 items-center'>
                <div className='w-full justify-items-center pl-10'>
                    <h1 className='text-7xl font-bold '>Software Developer 👋🏾</h1>
                    <p className='w-4/5 mt-5'>Hi, I'm Firoz Khan. A passionate Software Developer based in Rajasthan, India. 📍</p>
                    <div>

                    </div>
                </div>
                <div className='rounded-full overflow-hidden w-full pl-20 flex justify-center'>
                    <img src={ProfileImg} alt="" className='h-[18rem] rounded-full  border-4  border-black' />
                </div>
            </div>

        </div>
    )
}

export default HeroPage
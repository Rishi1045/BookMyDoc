import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl overflow-hidden relative'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-5 right-10 w-16 h-16 bg-white rounded-full'></div>
                <div className='absolute bottom-10 left-20 w-12 h-12 bg-white rounded-full'></div>
            </div>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white'>
                    <p className='leading-tight'>Ready to Book?</p>
                    <p className='mt-4 leading-tight'>Join <span className='text-yellow-300'>50,000+</span> Happy Patients</p>
                </div>
                <p className='text-blue-100 mt-4 text-sm sm:text-base max-w-md'>
                    Experience seamless healthcare with BookMyDoc. Quick appointments, trusted doctors, and comprehensive care.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                    <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300'>Get Started</button>
                    <button className='border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md transform hover:scale-105 transition-transform duration-500' src={assets.appointment_img} alt="" />
                {/* Floating Stats */}
                <div className='absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-white'>
                    <div className='text-2xl font-bold'>24/7</div>
                    <div className='text-xs'>Support</div>
                </div>
                <div className='absolute bottom-32 right-5 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-white'>
                    <div className='text-2xl font-bold'>100+</div>
                    <div className='text-xs'>Doctors</div>
                </div>
            </div>
        </div>
    )
}

export default Banner
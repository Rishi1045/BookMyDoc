import React from 'react'
import { assets } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const { isDarkMode } = useTheme()
    
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl px-6 md:px-10 lg:px-20 shadow-2xl overflow-hidden relative'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 left-10 w-20 h-20 bg-white rounded-full'></div>
                <div className='absolute top-32 right-20 w-16 h-16 bg-white rounded-full'></div>
                <div className='absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full'></div>
            </div>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px] relative z-10'>
                <div className='space-y-2'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
                        Your Health,
                    </h1>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
                        Our <span className='text-yellow-300'>Priority</span>
                    </h1>
                    <p className='text-lg md:text-xl text-blue-100 font-light mt-4'>
                        Connect with trusted healthcare professionals instantly
                    </p>
                </div>
                
                <div className='flex flex-col md:flex-row items-center gap-4 text-white'>
                    <div className='flex items-center gap-2'>
                        <img className='w-32' src={assets.group_profiles} alt="" />
                        <div className='text-sm'>
                            <p className='font-semibold'>50,000+ Happy Patients</p>
                            <p className='text-blue-100'>Trusted by thousands</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto'>
                    <a href='#speciality' className='flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group text-sm whitespace-nowrap'>
                        Book Appointment 
                        <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                        </svg>
                    </a>
                    <button 
                        onClick={() => document.getElementById('ai-symptom-checker')?.scrollIntoView({ behavior: 'smooth' })}
                        className='flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-sm whitespace-nowrap'
                    >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                        </svg>
                        AI Symptom Checker
                    </button>
                    <button 
                        onClick={() => document.getElementById('pharmacy-partners')?.scrollIntoView({ behavior: 'smooth' })}
                        className='flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap'
                    >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
                        </svg>
                        Order Medicines
                    </button>
                </div>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative flex items-center justify-center'>
                <div className='relative'>
                    <img className='w-full md:absolute bottom-0 h-auto rounded-lg transform hover:scale-105 transition-transform duration-500' src={assets.header_img} alt="" />
                    {/* Floating Cards */}
                    <div className='absolute top-10 -left-4 bg-white rounded-xl p-4 shadow-lg animate-pulse hidden md:block'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-success rounded-full'></div>
                            <span className='text-sm font-medium text-gray-700'>24/7 Available</span>
                        </div>
                    </div>
                    <div className='absolute bottom-20 -right-4 bg-white rounded-xl p-4 shadow-lg animate-pulse hidden md:block'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-primary rounded-full'></div>
                            <span className='text-sm font-medium text-gray-700'>Instant Booking</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
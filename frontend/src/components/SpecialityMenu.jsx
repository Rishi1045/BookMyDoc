import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 dark:text-gray-200'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-gray-600 dark:text-gray-400'>Browse through our extensive list of specialized healthcare professionals.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] hover:scale-105 transition-all duration-500 group' key={index}>
                        <div className='w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300'>
                            <img className='w-10 sm:w-14 filter group-hover:scale-110 transition-transform duration-300' src={item.image} alt="" />
                        </div>
                        <p className='text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary transition-colors'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
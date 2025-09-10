import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {

  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 dark:border-b-gray-600 bg-white dark:bg-dark-bg transition-colors duration-300'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.bookmydoc_logo} alt="BookMyDoc" />
      <ul className='md:flex items-start gap-5 font-medium hidden text-gray-700 dark:text-gray-300'>
        <NavLink to='/' >
          <li className='py-1 hover:text-primary transition-colors'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1 hover:text-primary transition-colors'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1 hover:text-primary transition-colors'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1 hover:text-primary transition-colors'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleTheme}
          className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
          aria-label='Toggle dark mode'
        >
          {isDarkMode ? (
            <svg className='w-5 h-5 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
            </svg>
          ) : (
            <svg className='w-5 h-5 text-gray-700' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          )}
        </button>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 dark:text-gray-300 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 dark:bg-dark-card rounded flex flex-col gap-4 p-4 shadow-lg border dark:border-gray-600'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-primary cursor-pointer transition-colors'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-primary cursor-pointer transition-colors'>My Appointments</p>
                  <p onClick={logout} className='hover:text-error cursor-pointer transition-colors'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hidden md:block hover:shadow-lg transform hover:scale-105 transition-all duration-200'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white dark:bg-dark-bg transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.bookmydoc_logo} className='w-36' alt="BookMyDoc" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-700 dark:text-gray-300'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
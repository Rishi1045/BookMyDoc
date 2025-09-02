import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import AISymptomChecker from '../components/AISymptomChecker'
import PharmacyPartners from '../components/PharmacyPartners'

const Home = () => {
  return (
    <div className='space-y-16'>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      
      {/* AI Features Section */}
      <div className='my-20 md:mx-10'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4'>
            AI-Powered Health Tools
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Experience the future of healthcare with our intelligent tools designed to help you make informed decisions about your health.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div id='ai-symptom-checker'>
            <AISymptomChecker />
          </div>
          <div id='pharmacy-partners'>
            <PharmacyPartners />
          </div>
        </div>
      </div>
      
      <Banner />
    </div>
  )
}

export default Home
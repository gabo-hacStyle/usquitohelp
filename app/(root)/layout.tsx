import React from 'react'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <main className='root'>
            <Navbar 
                location='main'
            />
          <div className="root-container overflow-hidden">
                    {children} 
          </div>
      </main>
      <Footer />
    </>
    
  )
}

export default Layout
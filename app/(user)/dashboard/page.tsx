import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardTabs from '@/components/shared/DashboardTabs'



const DashboardPage = () => {
  return (
    <div className='gap-4 my-7 w-[90%] mx-auto'>
       
            <header className='flex items-center px-4 gap-8 '>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>
                        G
                    </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <span className="text-2xl md:text-2xl font-bold">Gabs</span>
                    <span className="text-xl">10 semestre</span>
                </div>
            </header>

           

        
        <main className='col-span-2 gap-8 p-0 mt-6'>
            <DashboardTabs />

        </main>
    </div>
  )
}

export default DashboardPage
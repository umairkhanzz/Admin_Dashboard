import React from 'react'
import Sidebar from '../components/dashboard/sidebar/sidebar'
import Navbar from '../components/dashboard/navbar/navbar'

function layout({ children }) {
    return (
        <div className='border-2 border-black flex' >
            <div className='border-2 border-red-700 w-[350px]'> 
                <Sidebar />
            </div>
            <div className='border-2 border-blue-700 w-full'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default layout
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

function Applayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Applayout
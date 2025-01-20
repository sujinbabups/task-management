import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Firstlayout = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Outlet/>
      
    </div>
    </>
  )
}

export default Firstlayout

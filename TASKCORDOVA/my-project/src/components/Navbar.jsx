import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <div className=' bg-slate-500 py-2'>
              <h2 className='font-bold'>Task Management System</h2>
          <div className='display flex justify-center '>
            <nav>
                <ul className='display flex gap-8'>
                    <li className='text-lg mt-[-10px] text-blue-950 font-bold'><Link to="/">Home</Link></li>
                    <li className='text-lg mt-[-10px] text-blue-950 font-bold'><Link to="/addtask">Add Task</Link></li>
                    <li className='text-lg mt-[-10px] text-blue-950 font-bold'><Link to="/viewtasks">View Tasks</Link></li>
                </ul>
            </nav>
        </div>
  
    </div>
    </div>
  )
}

export default Navbar

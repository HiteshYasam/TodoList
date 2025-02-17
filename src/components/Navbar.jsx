import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#EFB11D] text-white py-3 text-xl'>
        <div className="logo">
            <span className='font-bold text-2xl mx-8'>MyTodos</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'><a href="https://github.com/HiteshYasam/TodoList">Github</a></li>
      </ul>
    </nav>
  )
}

export default Navbar


import React, { Profiler, useState } from 'react'



const Navbar = () => {
    const [name, setName] = useState('abhishek choudhary')
    const [menulinks, setMenulinks] = useState([
        {
            title: 'home',
            link: "/home",
            id: 1
        },
        {
            title: 'about',
            link: "/about",
            id: 2
        },
        {
            title: 'skills',
            link: "/skills",
            id: 3
        },
        {
            title: 'portfolio',
            link: "/portfolio",
            id: 4
        },
        {
            title: 'contact',
            link: "/contact",
            id: 5
        }
    ])

  return (
    <div className="flex justify-between h-20 px-16 bg-gray-100 items-center">
      <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="space-x-6">
       
   {
      menulinks.map((link)=>(<a href={link.link}  className="hover:text-orange-800" >
      {link.title}
   </a>))
   }
      </div>
      <div>
 <button className="px-3 py-2 bg-orange-600 shadow-lg rounded-full">hire me</button>
      </div>
    </div>
  )
}

export default Navbar

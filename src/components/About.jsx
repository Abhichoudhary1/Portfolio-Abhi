import React from 'react'
import img2 from '../images/img2.png'
const About = () => {
  return (
    <div className="py-16 bg-gray-100">
        <h3 className="text-center pb-16 font-bold text-4xl underline">About me</h3>
        <div className="flex items-center">
        <div className="w-full flex justify-center">
                <img className="rounded-full  h-[350px] w-[350px]" src={img2} alt="" />
       </div>
       <div className="w-full  flex justify-center">
        <div className="space-y-5">
        <h1 className="text-4xl">Full stack Developer</h1>
           <p>Full stack developers are versatile and capable of working on all aspects of a web development project, from designing and implementing the user interface to managing the database and server-side logic. They often have a broad range of skills and are able to work independently or as part of a team to build and maintain complex web applications.</p>
           <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">Read more...</button>
        </div>
          
       </div>
        </div>
       
    </div>
  )
}

export default About

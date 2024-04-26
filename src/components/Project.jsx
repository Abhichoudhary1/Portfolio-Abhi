import React from 'react'

const Project = () => {
  return (
    <div className="main-container py-16">
        <h1 className="text-3xl font-bold text-center underline">My Projects</h1>
       <div className="services-container flex justify-around  mt-10">
        <div className="border p-8 shadow-lg">
        <img src="https://tse3.mm.bing.net/th?id=OIP.uvq8CHRxKUQqKKyhH93XzgHaFj&pid=Api&P=0&h=220" alt="" />
        <a href="https://abhichoudhary1.github.io/motorola-web/" className="font-bold text-center">motorola clone</a>
         
        <p>created motorola clone using html and css</p>

        </div>
        <div className="border p-8 shadow-lg">
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS284oc3cwuOXfqsgn-IE3bLt_S57DM4de3vQ&usqp=CAU" className="h-auto w-full" alt="" />
         <a href="https://nakshjaipur.com/" className="font-bold text-center">starbucks clone</a>
        <p>created starbuks clone using html and css</p>

        </div>
        <div className="border p-8 ">
       
        <img src="data:image/jpeg;base64,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" className="h-auto w-full" alt="" />
         <a href="https://abhichoudhary1.github.io/quoteapp/" className="font-bold text-center">quote app</a>
        <p>generate random quote by using javascript</p>

        </div>
        <div className="border p-8 shadow-lg">
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS284oc3cwuOXfqsgn-IE3bLt_S57DM4de3vQ&usqp=CAU" className="h-auto w-full" alt="" />
         <a href="	https://nakshjaipur.com/" className="font-bold text-center">nakshjaipur</a>
        <p>created live  project using reactjs</p>

        </div>
       
       
     
       
        
       </div>
       <div className="services-container flex justify-around  mt-10">
        <div className="border p-8 shadow-lg">
        <img src="https://tse3.mm.bing.net/th?id=OIP.uvq8CHRxKUQqKKyhH93XzgHaFj&pid=Api&P=0&h=220" alt="" />
        <a href="https://abhichoudhary1.github.io/motorola-web/" className="font-bold text-center">motorola clone</a>
         
        <p>created motorola clone using html and css</p>

        </div>
      
       
       
       
       
       
     
       
        
       </div>

       
    </div>
  )
}

export default Project

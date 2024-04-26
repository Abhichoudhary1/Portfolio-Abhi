import React from 'react'
import bannerbackground from "../assets/banner_wallpaper.svg"

const Expertise = () => {
  return (
    <>
    <h1 className=" mb-8 text-3xl font-bold underline  text-center">
      My Expertise
    </h1>
    <div style={{backgroundImage: `url(${bannerbackground})`, backgroundSize: "cover"}} 
    className="mt-2 flex items-center justify-evenly" >
        
    {/* box section */}
         <div className="box-container my-2">
          <div className="my-8">
            <div className="w-2/3 ml-5 text-center">
              <h1 className="text-4xl mt-5 my-3">I love these technologies</h1>
              <p>Being a full stack developer isn't just a profession for me; it's a passion deeply rooted in my love for the technologies that power the web. From crafting captivating user interfaces to architecting robust back-end systems, I find immense joy and fulfillment in working with a diverse range of tools and frameworks that enable me to bring ideas to life in the digital realm.</p>
              <button className=" px-3 py-2 mt-5 rounded-full bg-orange-500">hire me</button>
            </div>
          </div>
         </div>
 
      <div>
        {/* skills container */}

        <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
          <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
             Java script
          </p>

          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            html
          </p>

          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            css
          </p>

          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            tailwind css
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            bootstrap
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            material UI
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            github
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            postman
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            mongodb
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            express
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            nodejs
          </p>
          <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
            State Management
          </p>
         
        </div>
      </div>
    </div>
</>

  )
}

export default Expertise

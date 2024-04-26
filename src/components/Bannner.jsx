import React, { useEffect, useRef } from 'react'
import bannerbackground from "../assets/banner_wallpaper.svg"
import Typed from 'typed.js'
import img from '../images/img1.png'
const Bannner = () => {
  const el = useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["Full stack developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  },[])
    return (
        <div
        style={ {backgroundImage: `url(${bannerbackground})`, backgroundSize: "cover"} }
        
        className="main-container flex items-center text-white p-5" >
            <div 
               
            className=" w-full  h-auto flex justify-center" >
              <div className="w-2/3 ms-10 h-auto">
              <h3 className="text-3xl mt-1">Hi, I am</h3>
                <h1 className="text-4xl font-bold mt-1">Abhishek Choudhary</h1>
                <h3 className="text-3xl font-semibold mt-1">I am <span className="font-bold underline" ref={el}></span></h3>
                <p className="mt-3"> a passionate and versatile full stack developer with a deep love for crafting robust and innovative web solutions.  I have honed my skills in both front-end and back-end development, allowing me to tackle every aspect of web development with confidence and expertise.</p>
                <div className="icons-container space-x-5 mt-2">
                  <span className="hover:bg-orange-500  px-2 py-2 rounded-full items-center bg-gray-800 ">
                  <i class="fa-brands text-2xl mt-2 fa-facebook"></i>
                  
                  </span>
               <span className="hover:bg-orange-500  px-2 py-2 rounded-full items-center bg-gray-800 ">
               <i class="fa-brands text-2xl fa-instagram"></i>
               </span>
                <span className="hover:bg-orange-500  px-2 py-2 rounded-full items-center bg-gray-800 ">
                <i class="fa-brands text-2xl fa-youtube"></i>

                </span>
                
                <span className="hover:bg-orange-500  px-2 py-2 rounded-full items-center bg-gray-800 ">
                <i class="fa-brands text-2xl fa-linkedin"></i>
                </span>
               
                </div>
                <div className="mt-6">
                  <a  className="px-3 py-2 bg-orange-500 rounded-full shadow-lg p-5 " href="/contactme">contactme</a>

                </div>
                
              </div>   
            </div>
            <div className="  w-full flex justify-center">
                <img className="rounded-full shadow-lg  h-[350px] w-[350px]" src={img} alt="" />
            </div>
        </div>
    )
}

export default Bannner

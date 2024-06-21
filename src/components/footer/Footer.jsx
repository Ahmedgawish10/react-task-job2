import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import Foot1 from "../../imgs/foot1.png"
import Foot2 from "../../imgs/foot2.png"

function Footer() {
  return (
    <section className='footer bg-[#EDEEFF] mt-[8rem] relative  overflow-hidden'>
            <div className=" contain w-[90%] mx-auto">
                <div className="footer-content flex gap-5 justify-center pt-5">
                    <div className="sochial1">
                        <a href=""> <FaInstagram className='text-4xl text-[#622c79]'/>        </a>
                    </div>
                    <div className="sochial1">
                         <a href=""> <FaFacebook className='text-4xl text-[#622c79]'/></a>
                    </div>
                    <div className="sochial1">
                        <a href=""> <IoLogoLinkedin className='text-4xl text-[#622c79]'/></a> 
                    </div>
                    <div className="sochial1">
                          <a href=""> <FaTwitter className='text-4xl text-[#622c79]'/></a>
                    </div>
                </div>
                <div className="footer-name flex justify-center items-center gap-3 pt-5 pb-4">
                  <span>  Ahmed Ali Gawish</span> <FaRegCopyright/> 2024
                </div>


                </div>

              <div className="vector1 absolute right-[-10px] top-5">
                <img src={Foot1}alt="" />
              </div>
              <div className="vector2 absolute left-[-14px] bottom-1">
                <img src={Foot2}alt="" />
              </div>


    </section>
  )
}

export default Footer
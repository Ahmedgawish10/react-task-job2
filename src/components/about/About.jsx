import React from 'react'
import Wave from "../../imgs/Vector-Cuadros.png"
import Prize from "../../imgs/prize.png"
import Comblain from "../../imgs/colombian.png"
import Layers from "../../imgs/Mask group.png"

import Calender from "../../imgs/calender.png"
import Vector1 from "../../imgs/Highlight_04.png"
import Vector2 from "../../imgs/About-Vector.png"

import "./about.css";
function About() {
  return (
<section className='aboutme relative  text-white pt-[2rem] z-10 overflow-hidden'>
   <div className="container1 w-[90%] mx-auto relative z-50" >
        <h2 className='title text-center text-4xl pt-[10rem]'>About Me</h2>
        <div className='about-content flex justify-center mt-[8rem]'>
            <div className="boxs bg-white border rounded flex gap-[2rem] justify-between relative  p-5 w-[70%]">
                <div className="box1 text-black text-center hover:cursor-pointer">
                       <div className="icon">
                        <img src={Prize} alt="" width="100px" height="20px"/>
                       </div>
                       <p className='text-2xl font-bold'> 100%</p>
                       <p>Responsibility</p>

                </div>
                <div className="box1 text-black text-center absolute top-[-120px] left-1/2 transform -translate-x-1/2  hover:cursor-pointer">
                       <div className="icon relative">
                        <img src={Comblain} alt="" width="300px" height="20px" className='comblain'/>
                        <img src={Layers} alt="" width="145px" height="20px" className='comblain2 absolute top-[32px] left-[28px] sm:top-[80px] sm:left-[60px]'/>

                       </div>
                </div>
                <div className="box1 text-black text-center  hover:cursor-pointer">
                       <div className="icon">
                        <img src={Calender} alt="" width="100px" height="20px"/>
                       </div>
                       <p className='text-2xl font-bold'> 100%</p>
                       <p>Puntuality</p>

                </div>
                     
                <div className="vector1 absolute top-[-100px] right-[-60px]">
                <img src={Vector1}alt="" />
              </div>

            </div>



        </div>



   </div>

<img src={Wave} alt="" className=' absolute top-0  h-[420px] w-[100%]'/>
         
<div className="vector2 absolute right-[-40px] bottom-[70px]">
                <img src={Vector2}alt="" />
              </div>

</section>


)
}

export default About
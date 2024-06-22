import React from 'react'
import HeroMan from "../../imgs/hero-person.png"
import Highlight from "../../imgs/Highlight_05.png"
import Arrow1 from "../../imgs/arrow-circle-right.png"
import Arrow2 from "../../imgs//Arrow_01.png"

import "./hero.css"
function Hero() {
  return (
    <section className='hero mt-[100px] overflow-hidden pb-[70px]'>
      <div className=" w-[90%] mx-auto">
        <div className="content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-4 gap-y-[2rem] ">
          <div className="right relative animated-element2 animate2"> 
            <h2 className='text-[40px] sm:text-[62px]  xl:text-[92px] f-[500] relative'>Hi, I am <br/> Hassan 🎨
            <span className='absolute right-[50%] xl:right-[40%] top-[0px] sm:top-[20px]    w-[30px] h-[50px] '>
              <img src={Highlight} alt="" />
            </span>
             </h2>
            <div className='experience mt-[1rem] w-[80%]'>I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea 
              is not to create an interface for creating it, it is that users prefer you because your product is easy to use.
              </div>
              <div className="contact mt-5">
              <button className="button-92 flex items-center " role="button">Contact Me!
                    <img src={Arrow1} alt="" />

              </button>

              </div>
              <div className='hero-arrow absolute bottom-[-86px] right-[-100px] animated-element3 animate3 '><img src={Arrow2} alt="" width='170px' /></div>
          </div>
          <div className="left flex items-center">
            <span className='heroman-animated relative'>
            <img src={HeroMan} alt="" />


            </span>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Hero

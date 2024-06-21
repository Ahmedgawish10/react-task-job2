import React from 'react'
import ArrowPortfolio from "../../imgs/arrow-portfolio.png"
import Port1 from "../../imgs/port1.png"
import Port2 from "../../imgs/port2.png"
import Port3 from "../../imgs/port3.png"
import "./portfolio.css"
function Portfolio() {
    return (
        <section className='portfolio ' id="portfolio">
            <div className=" w-[90%] mx-auto">
                <div className='title relative max-w-max'>
                    <span className='text-[50px] gradient-text '>Portfolio</span>
                    <img src={ArrowPortfolio} width="100px" alt="" className='absolute bottom-[-2px] right-0' />
                </div>

                <div className="portfolio-content flex gap-4 pt-[3rem]">
                    <div className="box1 hover:cursor-pointer">
                        <a href="/">  <img src={Port1} alt="" /> </a>
                    </div>
                    <div className="box1 hover:cursor-pointer">
                        <a href="/"> <img src={Port2} alt="" /> </a>

                    </div>
                    <div className="box1 hover:cursor-pointer">
                        <a href="/">  <img src={Port3} alt="" />  </a>

                    </div>

                </div>













            </div>



        </section>
    )
}

export default Portfolio
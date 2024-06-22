import React, { useEffect, useRef } from 'react';
import ArrowSkills from "../../imgs/skills-arrow.png"
import "./skills.css"
function Skills() {

    return (
        <section className='skills pt-[6rem] sm:pt-[10rem] xl:pt-[12rem]' id="skills">
            <div className=" w-[90%] mx-auto">
                <div className='title relative max-w-max'>
                    <span className='text-[50px] gradient-text '>Skills</span>
                    <img src={ArrowSkills} width="100px" alt="" className='absolute top-[-30px] right-[-40px]' />
                </div>
                <div className="skills-content flex flex-wrap gap-5 md:grid md:grid-cols-2 xl:grid-cols-4 items-center justify-center mt-[2rem] pb-[3rem]">
                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                className='t'
                                role="progressbar"
                                aria-valuemax="100"
                                style={{ '--value': 90 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>Figma /<br /> Adobe XD</div>
                        </div>

                    </div>


                    {/* 2 */}
                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                className='t'
                                role="progressbar2"
                                aria-valuemax="100"
                                style={{ '--value': 80 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>UI Desing</div>
                        </div>
                    </div>

                    {/* 3 */}

                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar"
                                aria-valuemax="100"
                                style={{ '--value': 90 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>Information <br /> Architecture</div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar2"
                                aria-valuemax="100"
                                style={{ '--value': 80 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>UX Desing</div>
                        </div>

                    </div>

                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar"
                                aria-valuemax="100"
                                style={{ '--value': 90 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>Prototyping</div>
                        </div>

                    </div>

                    {/* 2 */}
                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar2"
                                aria-valuemax="100"
                                style={{ '--value': 80 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3 '>Box Model</div>
                        </div>

                    </div>
                    {/* 3 */}

                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar"
                                aria-valuemax="100"
                                style={{ '--value': 90 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill  pt-3'>Business Model <br /> Canvas</div>
                        </div>

                    </div>
                    {/* 4 */}
                    <div className="box1 flex justify-center">
                        <div>
                            <div
                                role="progressbar2"
                                aria-valuemax="100"
                                style={{ '--value': 80 }}
                            >

                            </div>
                            <div className='text-center text-[#1B1C37] text-sm sm:text-md skill pt-3'>Desing Systems</div>
                        </div>

                    </div>

                </div>



            </div>


        </section>
    )
}

export default Skills
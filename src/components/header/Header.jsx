import React,{useState,useEffect} from 'react'
import LogoMan from "../../imgs/man.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

import "./header.css";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
<header className="bg-white fixed top-0 w-full z-50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-5">
    <div className="flex h-16 items-center justify-between bg-[#1B1C37] border rounded px-3 ">
      <div className="md:flex md:items-center md:gap-12">
        <a className="flex text-white items-center text-sm" href="#">
          <img src={LogoMan} alt="" className='me-2'/> Hassan Abu Ali
        </a>
      </div>

      <div     className={`hidden md:block nav-links h-[100%] ${isMenuOpen ? 'show ' : ''}`}      >
        <nav aria-label="Global"  className=" h-[100%]">
          <ul className="flex items-center gap-6 text-sm text-white   h-[100%]">
          <li className=" h-[100%] flex items-center">
          <a className="text-white transition hover:text-gray-500/75" href="/"> Home </a>
            </li>

            <li className=" h-[100%] flex items-center">
              <a className="text-white transition hover:text-gray-500/75" href="/#skills"> Skills </a>
            </li>

            <li className="  h-[100%] flex items-center">
              <a className="text-white transition hover:text-gray-500/75" href="/#portfolio"> Portfolio </a>
            </li>

            <li className=" h-[100%] flex items-center">
              <a className="text-white transition hover:text-gray-500/75" href="/#blog"> Blog </a>
            </li>

            <li className=" h-[100%] hidden " >
            <a href='/#footer' className=" contact-me  py-2 px-[2rem]" role="button">Contact Me</a>
            </li>
           
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 contact-up">
        <a className="contact-me py-2 px-[2rem]" role="button ">Contact Me</a>
        </div>

        <div className="block md:hidden">
            <button
          className="rounded  p-2 text-white "
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <RiCloseFill className=" hover:text-red-500  text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className='text-white text-2xl' onClick={toggleMenu} />
          )}
        </button>
        </div>
      </div>
    </div>
  </div>
</header>  )
}

export default Header
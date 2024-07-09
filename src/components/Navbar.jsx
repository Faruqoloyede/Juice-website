import { links } from "../constant";
import { logo } from "../assets"
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex justify-between items-center sm:py-6 py-3 w-full">
        <img src={logo} alt="logo" className="w-[120px]" />

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {links.map((items)=>(
                <li key={items.id} className="font-quicksand text-[16px] font-medium text-black cursor pointer mr-6">
                    <a href={`#${items.id}`}>{items.link}</a>
                </li>
            ))}
        </ul>
        <button className="border border-brown px-4 py-2 rounded-[10px] sm:flex hidden">
            <a href="#">Sign up</a>
        </button>
        <RxHamburgerMenu className="text-4xl text-brown font-medium sm:hidden block cursor-pointer" onClick={()=> setToggle(true)} />

        <div className={`${toggle ? "right-0" : "right-[-600px]"} sm:hidden  fixed top-0  h-[70%] w-[60%] px-4 py-6 side-nav`}>
            <div>
                <LiaTimesSolid className="text-4xl text-brown font-medium cursor-pointer" onClick={()=> setToggle(false)} />
            </div>
            <ul className="list-none flex flex-col justify-center items-center mt-5 ">
                {links.map((items)=>(
                    <li key={items.id} className="font-quicksand text-[18px] font-medium text-brown cursor pointer mb-10" onClick={()=> setToggle(false)}>
                    <a href={`#${items.id}`}>{items.link}</a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col items-center justify-center">
            <button className="border border-brown px-4 py-2 rounded-[10px]">
            <   a href="#">Sign up</a>
            </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
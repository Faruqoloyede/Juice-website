import { links } from "../constant";
import { logo } from "../assets"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 w-full">
        <img src={logo} alt="logo" className="w-[124px]" />

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {links.map((items)=>(
                <li key={items.id} className="font-quicksand text-[16px] font-medium text-black cursor pointer mr-6">
                    <a href={`#${items.id}`}>{items.link}</a>
                </li>
            ))}
        </ul>
        <button className="border border-brown px-4 py-2 rounded-[10px]">
            <a href="#">Sign up</a>
        </button>
    </nav>
  )
}

export default Navbar
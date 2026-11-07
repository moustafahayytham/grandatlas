
import { Link } from "react-router-dom"; 
import atlas from "../assets/Images/Atlas.png";

export default function Navbar() {
  return (
      <>
     <div className="relative w-full h-[85px] md:h-[105px] flex justify-between items-center bg-[#ffffff] px-4 md:px-8">
        <Link to="/"><img src={atlas} alt="Atlas Logo" className="w-[90px] md:w-[116px] h-auto"/> </Link>
        <ul className="hidden lg:flex gap-8 xl:gap-16 justify-center items-center absolute left-1/2 -translate-x-1/2 font-lato font-bold text-[#847D7D] py-4">
          <li><Link className="focus:text-[#8E1616] focus:border-b-3 focus:border-[#8E1616]" to='/'>Home</Link></li>
          <li><Link className="focus:text-[#8E1616] focus:border-b-3 focus:border-[#8E1616]" to='/units'>Units</Link></li>
          <li><Link className="focus:text-[#8E1616] focus:border-b-3 focus:border-[#8E1616]" to='/zones'>Zones</Link></li>
          <li><Link className="focus:text-[#8E1616] focus:border-b-3 focus:border-[#8E1616]" to='/developers'>Developers</Link></li>
          <li><Link className="focus:text-[#8E1616] focus:border-b-3 focus:border-[#8E1616]" to='/contact'>Contact Us</Link></li>
        </ul>

        <button className="w-[100px] md:w-27.5 h-[35px] rounded-[5px] text-[var(--secondary-color)] font-lato bg-linear-to-r from-[#8E1616] to-[#C34B4B]">Register</button>
      </div>
      </>
  )
}

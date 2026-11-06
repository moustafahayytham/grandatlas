import React from 'react'
import logo from '../assets/Images/Atlas.png'
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="w-full h-[374px] bg-[#FAFAFA] text-[#555B6E] font-sans flex justify-center">
      <div className="w-full max-w-[1085px] h-[302px] mt-[36px] mx-auto px-8 pt-8">
        <div className="flex flex-row justify-center gap-[60px] pb-5">

          <div className="w-[150px] flex flex-col items-center shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[151px] h-[110px] object-contain" />
            </Link>
            <a href="#" className="text-[16px] px-1 py-0.5 mt-1 text-[#0A142F] font-lato font-normal whitespace-nowrap">
              +1 (763) 547-12-97
            </a>
            <a href="#" className="text-[16px] mt-2 text-[#0A142F] font-lato font-normal whitespace-nowrap">
              support@grandatlas.com
            </a>
          </div>

          <div className="w-[150px] pt-1 shrink-0 ml-[159px]">
            <h3 className="text-[16px] font-bold text-[#0A142F] font-lato mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-1 text-[16px] text-[#0A142F] font-lato font-normal opacity-65">
              <li><Link to="/" className="hover:text-[#8E1616]">Home</Link></li>
              <li><Link to="/units" className="hover:text-[#8E1616]">Inventories</Link></li>
              <li><Link to="/zones" className="hover:text-[#8E1616]">Zones</Link></li>
              <li><Link to="/developers" className="hover:text-[#8E1616]">Developers</Link></li>
              <li><Link to="/contact" className="hover:text-[#8E1616]">Contact Us</Link></li>
            </ul>
          </div>

          <div className="w-[150px] pt-1 shrink-0">
            <h3 className="text-[16px] font-bold text-[#0A142F] font-lato mb-2">About</h3>
            <ul className="flex flex-col gap-1 text-[16px] text-[#0A142F] font-lato font-normal opacity-65">
              <li><Link to="#" className="hover:text-[#8E1616]">Grand Atlas</Link></li>
              <li><Link to="#" className="hover:text-[#8E1616]">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-[#8E1616]">Legal</Link></li>
              <li><Link to="#" className="hover:text-[#8E1616]">Help</Link></li>
              <li><Link to="#" className="hover:text-[#8E1616]">Support</Link></li>
            </ul>
          </div>

          <div className="w-[200px] pt-1 shrink-0">
            <h3 className="text-[16px] font-medium text-[#0A142F] mb-[36px]">Get In touch</h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-[248px] h-[46px] rounded-[6px] mb-[18px] border border-[#8E1616] overflow-hidden bg-white"
            >
              <input
                type="email"
                placeholder="Get product updates"
                aria-label="Email address for product updates"
                required
                className="flex-1 min-w-0 h-full px-[9px] text-[14px] font-lato font-normal text-[#555555] outline-none placeholder:text-[#847D7D] bg-white"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="w-[40px] h-full shrink-0 bg-[#8E1616] text-white flex items-center justify-center"
              >
                <span className="text-[15px] leading-none">➜</span>
              </button>
            </form>

            <div className="flex gap-2 mt-3">
              <a href="#" aria-label="LinkedIn" className="w-[28px] h-[28px] rounded-full border border-[#E8E8E8] flex items-center justify-center text-[9px] text-[#941B1B]">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Facebook" className="w-[28px] h-[28px] rounded-full border border-[#E8E8E8] flex items-center justify-center text-[9px] text-[#941B1B]">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="w-[28px] h-[28px] rounded-full border border-[#E8E8E8] flex items-center justify-center text-[9px] text-[#941B1B]">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t w-[1073.5px] border-[#E5E5E5] py-4 text-center mt-[40px]">
          <p className="text-[16px] text-[#0A142F] font-lato font-normal">
            © 2020 Lift Media. All rights reserved
          </p>
        </div>
      </div>
    </footer>

    </>
  )
}
import React from 'react'
import Hero from '../../components/Hero'
import ZonesImage from '../../assets/Images/Zones.png'
import CairoMosque from '../../assets/Images/CairoMosque.png'
import Qaitbay from '../../assets/Images/Qaitbay.png'
import SahelZones from '../../assets/Images/Sahelzones.png'
import Pyramids from '../../assets/Images/Pyramids.png'
import { useNavigate } from 'react-router-dom';

export default function Zones() {
  const navigate = useNavigate();

  return (
     <>
    
        <Hero 
        bg={ZonesImage}
    title={"Destinations Defined by Distinction"}
    description={`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.`}
    icons={true}
    />

    <div className="w-full flex flex-col items-center mt-[123px]">
      <div className="w-[1366px] h-[221px] gap-[20px] flex flex-row items-center justify-center ml-[41px] mr-[33px]">
  <div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={CairoMosque} alt="Cairo Mosque"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Cairo</h2>
  </div>
</div>
        <div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={Qaitbay} alt="Qaitbay"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Alexandria</h2>
  </div>
</div>
        <div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={Pyramids} alt="Pyramids"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Giza</h2>
  </div>
</div>
        <div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={SahelZones} alt="Dahab"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Dahab</h2>
  </div>
</div>
      </div>

      <div className="w-[1366px] h-[221px] gap-[20px] flex flex-row items-center justify-center mt-[55px] ml-[41px] mr-[33px] mb-[86px]">
        <div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={CairoMosque} alt="Cairo Mosque"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Cairo</h2>
  </div>
</div>

<div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={Qaitbay} alt="Qaitbay"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Alexandria</h2>
  </div>
</div>

<div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={Pyramids} alt="Pyramids"className="w-full h-full object-cover transition-transform duration-100"/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Giza</h2>
  </div>
</div>

<div onClick={() => navigate("/projects")} className="relative group w-[337px] h-[221px] rounded-[8px] overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_#00000040]">
  <img src={SahelZones} alt="Dahab"className="w-full h-full object-cover transition-transform duration-100 "/>
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
    <h2 className="text-white text-[32px] font-semibold font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500">Dahab</h2>
  </div>
</div>

      </div>
    </div>
        </>
  )
}

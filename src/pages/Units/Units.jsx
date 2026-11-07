import React from 'react'
import Hero from '../../components/Hero'
import Unithero from '../../assets/Images/Unithero.png'
import UnitBg from '../../assets/Images/UnitsBuildings.svg'
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient.js";    
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from "react-spinners";


export default function Units() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUnits() {
      const { data, error } = await supabase
        .from("units")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setUnits(data);
      }

      setLoading(false);
    }

    getUnits();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[426px]">
      <MoonLoader color="#8E1616" size={90} /></div>;
  return (
    <>

    <Hero 
        bg={Unithero}
        title={"Where Visionary Design Meets Daily Life"}
        description={`Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world`}
        icons={true}
        />

         
<div className="w-full flex flex-wrap justify-center gap-[20px] mt-[38px] px-[37px] mb-[141px]">

  {units.map((unit) => (

    <div
      key={unit.id}
      className="w-full max-w-[442px] min-h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] bg-white flex flex-col"
    >

      <div className="relative">

        <img
          src={unit.image_url || UnitBg}
          alt={unit.title}
          className="w-[calc(100%-24px)] h-[271px] object-cover rounded-[16px] mt-[16px] mx-[12px]"
        />

        <span className="absolute top-[26px] right-[24px] px-[10px] py-[4px] rounded-[4px] bg-[#21E008] text-white text-[16px] font-lato font-bold">
          {unit.status}
        </span>
        

      </div>

      <div className="w-[415px]] h-[42px] border border-[#A18E77] border-t-transparent border-r-transparent border-l-transparent flex justify-between items-center mx-[12px] mt-[10px] text-[#A18E77] text-[16px]">

        <span>{unit.bedrooms} Bedrooms</span>

        <span>{unit.bathrooms} Bathrooms</span>

        <span>{unit.area}m</span>

        {/* <div>
        </div> */}

      </div>

      <div className="flex justify-between items-center mx-[12px] mt-[12px]">

        <h2 className="text-[#8E1616] text-[24px] font-playfair font-semibold">
          {unit.title}
        </h2>

        <p className="text-[#A18E77] text-[26px] font-lato font-bold whitespace-nowrap">
          {Number(unit.price).toLocaleString()}EGP
        </p>


      </div>



      <div className="mx-[12px] mt-[10px]">

        {unit.description && (
          <p className="text-[#847D7D] font-lato font-normal text-[16px] mt-[5px] mb-[24px]">
            {unit.description}
          </p>
        )}

      </div>

      <button  onClick={() => navigate("/displayunit")} className="w-[calc(100%-24px)] h-[35px] border border-[#8E1616] text-[#8E1616] text-[16px] font-lato rounded-[8px] mx-[12px] mt-auto mb-[12px]">
        View Details
      </button>

    </div>

  ))}

</div>



    </>
  )
}

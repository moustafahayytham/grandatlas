import React, { useEffect, useState } from 'react'
import Unit1 from '../../assets/Icons/Units/Unit1.png'
import Zones from '../../assets/Icons/zoneicons/ZoneProjects.png'
import Zone2 from '../../assets/Icons/zoneicons/Zone2.png'
import { supabase } from '../../supabaseClient.js'
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from "react-spinners";

export default function Projects() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getZones() {
      const { data, error } = await supabase
        .from("zones")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setZones(data);
      }

      setLoading(false);
    }

    getZones();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[426px]">
      <MoonLoader color="#8E1616" size={90} /></div>;

  return (
    <>
    <div className='w-full flex flex-col items-center mb-[141px]'>
            <div className='justify-center items-center flex flex-col'>
                <h2 className="text-[32px] text-black text-center font-playfair font-semibold">Developer Projects</h2>
      <div className="w-[164px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]">
      </div>
                <img className='w-[1381px] h-[562px] rounded-[24px] justify-center items-center mb-[11px]' src={Zones} alt="Zone Projects" />
            </div>

      {loading ? (
        <p className="mt-[38px]">Loading zones...</p>
      ) : (

        <div className="w-full flex flex-wrap justify-center gap-[20px] mt-[38px] px-[37px]">

          {zones.map((zone) => (

            <div
              key={zone.id}
              className="w-full max-w-[442px] min-h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] bg-white flex flex-col"
            >

              <div className="relative">

                <img
                  src={zone.image_url || Zone2}
                  alt={zone.name}
                  className="w-[calc(100%-24px)] h-[271px] object-cover rounded-[16px] mt-[16px] mx-[12px]"
                />

              </div>

              <div className="w-[calc(100%-24px)] h-[42px] border border-[#A18E77] border-t-transparent border-r-transparent border-l-transparent flex justify-between items-center mx-[12px] mt-[10px] text-[#A18E77] text-[16px]">

                <span>{zone.units} Units</span>

                <span>{zone.gym} Gyms</span>

                <span>{Number(zone.area).toLocaleString()}m</span>

              </div>

              <div className="flex justify-between items-center mx-[12px] mt-[12px]">

                <h2 className="text-[#8E1616] text-[24px] font-playfair font-semibold">
                  {zone.name}
                </h2>

              </div>

              <div className="mx-[12px] mt-[10px]">
              {zone.description && (
          <p className="text-[#847D7D] font-lato font-normal text-[16px] mt-[5px] mb-[24px]">
            {zone.description}
          </p>
        )} </div>

              <button className="w-[calc(100%-24px)] h-[35px] border border-[#8E1616] text-[#8E1616] text-[16px] font-lato rounded-[8px] mx-[12px] mt-auto mb-[12px]" >
                View Details
              </button>

            </div>

          ))}

        </div>

      )}

    </div>


    </>
  )
}


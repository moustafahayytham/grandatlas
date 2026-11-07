import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import DevImage from '../../assets/Images/DevHero.png'
import Hayah from '../../assets/Icons/homeicons/Hayah.svg'
import HayahCity from '../../assets/Icons/homeicons/HayahCity.png'
import { supabase } from "../../supabaseClient.js";
import { MoonLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom'

export default function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getDevelopers = async () => {
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setDevelopers(data);
      setLoading(false);
    };

    useEffect(() => {
      getDevelopers();
    }, []);

    if (loading) return <div className="flex justify-center items-center h-[426px]">
      <MoonLoader color="#8E1616" size={95} />
    </div>;

  return (
    <>
    <Hero bg={DevImage}
    title={"Defining the Future Skyline."}
    description={`Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers.`}
    icons={true}
    />

    <div className="w-full min-h-[440px] gap-[20px] items-center flex flex-row flex-wrap mb-[141px] justify-center mt-[38px]">
      {developers.map((developer) => (
        <div key={developer.id} className='justify-center w-[442px] h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] flex flex-col'>
          <div className='relative w-full h-[271px] shrink-0'>
            <img className="w-[415px] h-[271px] rounded-[16px] shadow-[0px_4px_4px_0px_#00000040] mt-[16px] mx-[12px] object-cover" src={developer.image_url} alt="Developer"/>
            <p className="absolute top-[26px] right-[24px] px-[10px] py-[4px] rounded-[4px] font-lato font-normal text-[12px] text-white bg-[#8E1616]">New Cairo</p>
          </div>

          <div className='w-full h-[80px] mt-[18px] shrink-0 flex flex-row justify-start items-center px-[18px]'>
    <img className='w-[196px] h-[65px] object-contain object-left' src={developer.logo_url} alt="Developer Logo"/>
  </div>

          <button onClick={() => navigate("/devprojects")} className="w-[415px] h-[35px] ml-[13px] border border-[#8E1616] font-lato font-normal text-[16px] text-[#8E1616] rounded-[8px]">
            View Projects
          </button>
        </div>
        ))}
    </div>
    </>
  );
}

import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Unit1 from '../../assets/Icons/Units/Unit1.png'
import Unit2 from '../../assets/Icons/Units/Unit2.png'
import Unit3 from '../../assets/Icons/Units/Unit3.png'
import Unit4 from '../../assets/Icons/Units/Unit4.png'
import Unit5 from '../../assets/Icons/Units/Unit5.png'
import Unit6 from '../../assets/Icons/Units/Unit6.png'
import Location from '../../assets/Icons/Units/locationgrey.png'

export default function DisplayUnit() {
  return (
    <>
    <div className='w-full flex flex-col items-center'>
        <div>
            <img className='w-[1381px] h-[562px] rounded-[24px] justify-center items-center mb-[11px]' src={Unit1} alt="Unit1" />
        </div>

    <div className='w-[1381px] h-[180px] flex flex-row justify-center gap-[8px] items-center mx-auto'>
        <img className='w-[270px] h-[180px] rounded-[12px]' src={Unit2} alt="Unit1" />
        <img className='w-[270px] h-[180px] rounded-[12px] ' src={Unit3} alt="Unit1" />
        <img className='w-[270px] h-[180px] rounded-[12px] ' src={Unit4} alt="Unit1" />
        <img className='w-[270px] h-[180px] rounded-[12px] ' src={Unit5} alt="Unit1" />
        <img className='w-[270px] h-[180px] rounded-[12px]' src={Unit6} alt="Unit1" />
        </div>

    <div className='w-[1366px] h-[608px] gap-[69px] mt-[63px] mb-[148px]'>
        <div className='justify-between w-[1366px] h-[84px] flex flex-col items-start'>
            <h1 className='text-[40px] font-lato font-bold text-[#8E1616]'>Splendid historic Art Nouveau villa </h1>
            <div className="flex items-center">
                <img src={Location} alt="Location" className="w-[25px] h-[25px] object-contain shrink-0"/>
                <p className="text-[20px] text-[#847D7D] font-lato font-medium ml-[8px]">Minusio, Lake Maggiore, Switzerland — ref.LOC1771</p>
              </div>
        </div>
        <h1 className='text-[40px] font-lato font-bold text-[#A18E77] items-end justify-between mt-[-80px] flex flex-col'>50,000,000 EGP</h1>

        <div className='flex flex-row items-start w-[1366px] h-[455px] gap-[300px] mt-[63px]'>
            <div className='w-[318px] h-[453px] gap-[25px]'>
                <h1 className='font-lato font-bold text-[26px] text-[#1D1616] mb-[25px]'>At a glance</h1>
                <ul className='list-inside list-disc text-[#847D7D] font-lato font-normal text-[26px]'>
                    <li className='mb-[26px]'>Plot size ca.: 589 m²</li>
                    <li className='mb-[26px]'>Living area ca.: 300 m²</li>
                    <li className='mb-[26px]'>Bedrooms: 3</li>
                    <li className='mb-[26px]'>Bathrooms: 3</li>
                    <li className='mb-[26px]' >Living rooms: 2</li>
                    <li className='mb-[26px]'>WC: 1</li>
                    <li className='w-[386px] h-[31px]'>External parking: 3,  covered</li>
                </ul>
            </div>

            <div className='flex flex-col justify-start items-start w-[790px] h-[329px] gap-[25px]'>
                <h1 className='font-lato font-bold text-[26px] text-[#1D1616]'>Overview</h1>
                <p className='text-[#847D7D] font-lato font-normal text-[26px] mb-[62px]'>Nestled in a residential area of Minusio, 
                    this magnificent historic villa is for sale, fully renovated and ready to move in. 
                    The spacious living areas, flooded with natural light thanks to perfect sun exposure, 
                    create a unique and welcoming atmosphere. A well-maintained, low-maintenance garden provides 
                    the ideal setting for enjoying outdoor gatherings. Its proximity to essential services and 
                    public transport also makes the villa an ideal choice for families.</p>
                    <div className='w-[766px] h-[57px] gap-[22px]'>
            <button className='bg-[#2c992c] border border-[#00000033] shadow-[0_2px_4px_#00000033] rounded-[8px] w-[372px] h-[57px] text-[#eeeeee] font-lato font-bold mr-[22px]'>Contact via WhatsApp</button>
            <button className='border border-[#8E1616] shadow-[0_2px_4px_#00000033] rounded-[8px] w-[372px] h-[57px] text-[#8E1616] font-lato font-bold'>Call</button>
        </div>
            </div>
    </div>


    </div>

    </div>

    </>
  )
}

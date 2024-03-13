import React, { useState } from 'react'
import TotalEarning from './Card_assets/Earning.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const data = [{
    id:1,
    image:'Earning',
    text:'Total earning',
    num:'$13,690',
    percent:'36%'
}    ]


const Earning = () => {
  return (
    <div>
    {data.map((dataa)=>{
       return(
        <div class='flex p-4 md:p-1 lg:p-2 xl:p-4 ' > 
            <img src={TotalEarning} alt='Total Earning' class='h-48  basis-1/2 pt-2 pb-2 md:pt-6 md:h-32 lg:h-36 xl:h-48 '></img>
            <div class='basis-1/2  '>
        <p class='text-xs pl-8 md:pl-0 lg:pl-3 xl:pl-12'>{dataa.text}</p>
        <p class='inline font-bold pl-8 md:font-medium md:pl-0 lg:pl-4 xl:pl-12'>{dataa.num}</p> 
        <span class='text-xs pl-4 text-green-500 md:pl-0 xl:pl-4'>{dataa.percent} 
        <FontAwesomeIcon icon={faChevronUp} class='w-2 inline m-1 md:m-0 xl:m-1' /></span>
        <ul class='  list-inside pl-8 text-xs mt-16 leading-6 md:pl-0 md:mt-12 lg:mt-10 lg:pl-4 xl:pl-12 xl:mt-16' >
            <li >
                <span class='text-yellow-500 '><FontAwesomeIcon icon={faCircle} /></span>
                <span class='text-black ml-2 md:ml-1 lg:ml-2'>Income</span></li>
            <li > 
                <span class='text-green-500'><FontAwesomeIcon icon={faCircle} /></span>
                <span class='text-black ml-2 md:ml-1 lg:ml-2'>Investment</span></li>
            <li >
                <span class='text-[#4491F6]'><FontAwesomeIcon icon={faCircle} /></span>
                <span class='text-black ml-2 md:ml-1 lg:ml-2'>Savings</span></li>
        </ul>
        </div>
        </div>
    ) } )}
     </div>
     )}

export default Earning
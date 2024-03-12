import React from 'react'
import revenue from './Card_assets/revenue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const Revenue = () => {
    const data = {

    }
  return (
    <div class='p-2 md:p-2 xl:p-4'>
        <h4 class='p-2 md:p-2 font-bold text-sm'>Revenue</h4>
        <img src={revenue} alt="Revenue" class='w-36 h-30 ml-20  md:ml-6 md:h-20 md:w-32 lg:w-32 lg:h-28 lg:ml-6 xl:w-56 xl:h-44 xl:ml-12 xl:mt-6'></img>
        <div class='text-xs'>
        <div class='xl:ml-5 xl:mt-4'>
      <span class='text-[#4491F6] m-1 md:m-0'><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1'>Account</p>
            <p  class='inline m-2 '>45%</p>
        
       
      <span class='text-yellow-500 m-1 ml-12  lg:ml-14 xl:ml-10'><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 '>Landing</p>
            <p class='inline m-2'>20%</p>
            </div>
       <div class='mt-2 xl:ml-4 xl:mt-4'>
       
        <span class='text-green-500 m-1 mt-2  '><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 '>Services</p>
            <p class='inline m-2 '>25%</p>
        
        
       <span class='text-sky-50 m-1 ml-11 mt-2 lg:ml-14 xl:ml-9'> <FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 '>Others</p>
            <p class='inline m-2 '>10%</p>
            </div>
        </div>
      
</div>
       
   
  )
}

export default Revenue
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
        <div class='text-xs ml-6 lg:ml-8'>
        <div class=' flex md:flex-col   md:mt-2 xl:flex-row xl:ml-5 xl:mt-4'>
      <div class="mt-2 ">
        <span class='text-[#4491F6] m-1 '><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 md:m-0'>Account</p>
            <p  class='inline m-2 md:m-1 '>45%</p></div>
        
       
   <div class='  ml-12 md:ml-0 mt-2  lg:ml-0 lg:mt-2 xl:ml-10'>   
      <span class='text-yellow-500 m-1 '><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 md:m-0'>Landing</p>
            <p class='inline m-2 md:m-1'>20%</p>
            </div>
            </div>
       <div class=' flex md:flex-col  mt-2 xl:flex-row xl:ml-4 xl:mt-4'>
       <div class=" mt-2 md:m-0 lg:ml-0 ">
        <span class='text-green-500 m-1   '><FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 md:m-0'>Services</p>
            <p class='inline m-2 md:m-1'>25%</p></div>
        
        
       <div class=" ml-12  mt-2 md:ml-0 lg:ml-0 xl:ml-10 xl:mt-0">
        <span class='text-sky-50 m-1'> <FontAwesomeIcon icon={faCircle} /></span>
            <p class='inline m-1 md:m-0'>Others</p>
            <p class='inline m-2 md:m-1'>10%</p></div>
            </div>
        </div>
      
</div>
       
   
  )
}

export default Revenue
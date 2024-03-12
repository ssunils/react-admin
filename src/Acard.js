import React from 'react'
import ATM_Card from './Card_assets/ATM_card.png'

const data= 
        {
        id:1,
        image:'ATM_card',
        text:'This month',
        num:'$16,982.20'
      }
    
const Acard =() =>{
        return(
            <div class='p-2 mb-4 md:mb-1 md:p-2 lg:p-2'>
          <div class=''>
          <img src={ATM_Card} alt="ATM Card" class="mb-4 h-36 w-full lg:h-24 xl:h-36"></img>
          <p class='text-xs mr-5 md:mr-8 lg:mr-10 xl:mr-36 inline text-black'>{data.text}</p>
          <span class=' text-xs font-bold'>{data.num}</span>
          <div class='w-full h-2 bg-sky-50 rounded-lg'><div class='bg-[#4491F6] w-3/12 h-2 rounded-lg'></div> </div>
          </div>
          
     </div>


        )
      
}

export default Acard
import React from 'react'
import Search from './assets/Search.png'
import Rectangle from './assets/Rectangle.png'
import Mail from './assets/Mail.png'
import Bell from './assets/Bell.png'
import Question from './assets/QuestionCircle.png'
import Play from './assets/play.png'
import Items from './Items'
import Acard from './Acard'

import Interest from './Interest'
import Transcard from './Transcard'
import Earning from './Earning'
import Revenue from './Revenue'

const Content = () => {
  return (
    <section class='bg-sky-50 md:pb-1 lg:pb-1 xl:pb-1'>
    <header class="flex bg-white pt-2 pb-2 hover:border-blue-500 lg:py-1 xl:py-2">
        
          <div class='basis-3/4 pl-3 '>  
          
           <p class='rounded-2xl p-2 text-xs w-64 bg-sky-50 border-inherit' ><img class='inline mr-4' src={Search} alt='search'></img>Search anything</p></div>
            <div class='flex basis-1/4 justify-evenly'>  
            <div class='rounded-full bg-zinc-200'><img class='p-2'src={Mail} alt='Mail'></img></div>
            <div class='rounded-full bg-zinc-200'><img class='p-2'src={Bell} alt='Notification'></img></div>
            <div class='rounded-full bg-zinc-200'> <img  class='p-2'src={Question} alt='Clarification'></img> </div>
            </div>
            
    </header>
    
    <div class='m-2 md:flex bg-[#4491F6] my-2 leading-10 text-white rounded-lg md:my-2 md:mx-2 lg:my-2 xl:mx-5 xl:my-4'>
    <div class='md:basis-1/2 text-center pt-4 pb-2 md:text-left md:pl-12 md:pt-2 md:pb-1 lg:pb-2 lg:pt-2 lg:pb-0 lg:pl-20 xl:pl-36 xl:pt-4 xl:pb-2' >
    <p className='text-lg font-bold'>Collect your benefits 🔥</p>
    <p className='text-xs'>Check all the advantages and choose the best. </p>
    <button className='text-xs border-dotted border rounded-sm'><img class='inline'src={Play} alt='Watch more'></img>Watch More
    </button>
    </div>
    <div class='md:basis-1/2 '>
      <div class=" pb-2 mb-4 md:mb-0 md:pb-0 md:mt-3 lg:mt-3 xl:mt-6">  <Items/></div>
    </div>
    </div>



    <div class='mx-2 md:flex  my-2 md:mx-2 md:my-2 lg:my-2 xl:mx-5' >
      <div class='md:basis-2/6 bg-white rounded-lg  lg:basis-1/3 xl:basis-2/6'><Acard /></div>
      <div class='md:basis-5/12 bg-white rounded-lg md:ml-2 lg:basis-1/2 lg:ml-1.5 xl:ml-4 xl:basis-5/12'><Earning /></div>
      <div class='p-2 mt-4 md:mt-0  md:p-0 md:basis-1/4 bg-white rounded-lg md:ml-2 lg:basis-[27%] lg:ml-1.5 xl:ml-4 xl:basis-1/4'><Interest /></div>
    </div>

    <div class='md:flex  my-2  md:mx-2 md:my-2 lg:my-2 xl:mx-5 xl:my-4'>
      <div class='md:basis-2/6 bg-white rounded-lg lg:basis-1/3 xl:basis-2/6 mx-2 my-4 md:mx-0 md:my-0 '><Revenue />
      </div>
      <div class='my-2 mx-2 md:mx-0 md:my-0 md:basis-4/6 bg-white rounded-lg lg:basis-2/3 lg:my-0 md:ml-2 xl:my-0 xl:basis-4/6 xl:ml-4'><Transcard /></div>
    </div>
    
    </section>
   
  )
}

export default Content
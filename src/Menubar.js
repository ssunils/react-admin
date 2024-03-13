import React from 'react'
import logo from './assets/logo.png'
import logoname from './assets/logoname.png'
import overview from './assets/overview.png'
import research from './assets/research.png'
import reports from './assets/reports.png'
import teams from './assets/teams.png'
import notify from './assets/notify.png'
import settings from './assets/settings.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Menubar = () => {
  return (
    <section class=''>
        <div className='text-center  py-4 lg:py-2 xl:py-4'>
          <img class='h-10 inline pr-4 md:h-4 lg:h-6 xl:h-10' src={logo} alt="logo symbol"></img>
          <img class='h-8 inline md:h-4 lg:h-6 xl:h-8'src={logoname} alt="logo name"></img>
        </div>
        <p class='px-8 text-xs md:px-4 lg:px-8'> Menu</p>
        <div className=' px-8 mt-2 text-xs md:px-4 lg:px-8'> 
        <div className=' bg-[#4491F6] rounded flex p-2 px-4  md:px-2 lg:px-4'>
          <img src={overview} alt="overview" class=''></img>
          <p class='ml-4 text-white'> Overview</p></div>
        <div class='flex  py-3 px-4 md:px-1 md:py-1 lg:px-4 lg:py-1 xl:py-3'>
          <img src={research} alt='research'></img>
          <p class='ml-4'>Research</p></div>
          <div class='flex  py-3 px-4 md:px-1 md:py-1 lg:px-4 lg:py-1 xl:py-3' >
          <img src={reports} alt='reports'></img>
          <p class='ml-4'>Reports</p>
          <span class='border-2 bg-[#4491F6] ml-44 rounded px-2 py-px md:ml-24 lg:ml-32 xl:ml-40'>32</span></div>
          <div class=' py-3 px-4 md:px-1 md:py-1 lg:px-4 lg:py-1 xl:py-3'>
          <div class='flex '><img src={teams} alt='teams'></img>
          <p class='ml-4'>Teams</p>
          <span class='ml-48 md:ml-28 lg:ml-36 xl:ml-44'><FontAwesomeIcon icon={faChevronUp} /></span></div>
          <div className='border-l-2 border-sky-200 ml-2   mt-2 pl-8 leading-8 md:leading-6 lg:leading-8'>
            <p>Analytics</p>
          <div class='flex border-2 -mx-3 md:-ml-4 md:mr-0.5 lg:-mx-4 xl:-mx-3 bg-sky-50 rounded'><p class='px-3' >Design</p> <span class='ml-44 md:ml-24 lg:ml-32 xl:ml-40'><FontAwesomeIcon icon={faChevronRight} /></span></div>
           <p> Engineering</p>
            <p>Marketing</p>
            </div>
              </div>
          <div class='flex  py-3 px-4 md:px-1 md:py-1 lg:px-4 lg:py-1 xl:py-3'>
          <img src={notify} alt='notification'></img>
          <p class='ml-4 '>Notifications</p>
          <span class='border-1 bg-[#4491F6] ml-32 md:ml-10 lg:ml-16 rounded px-2 text-xs  '>10</span></div>
          <div class='flex  py-3 px-4 md:py-1 md:px-1 lg:px-4 lg:py-1 xl:py-3'>
          <img src={settings} alt = 'settings'></img>
          <p class='ml-4'>Settings</p></div>
        </div>
    <div class=' pt-2 bg-sky-50 rounded-md mx-8 mt-10 mb-2 md:mt-32  lg:mt-20 xl:mt-40'>
    <p class='rounded-full  border-2 w-12 h-12 bg-zinc-200 m-6 ml-32 md:m-3 lg:m-2 md:ml-16 lg:ml-28 xl:ml-32' ></p>
    <p class=' px-10 font-bold text-center' >Grace Trans</p>
    <p class='text-center px-10 pb-2'>Owner & Founder</p>
    </div>
</section>
  )
}

export default Menubar
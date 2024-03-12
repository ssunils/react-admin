import React from 'react'
import Revenue from './Card_assets/Icon_1.png'
import ATM_Card from './Card_assets/ATM_card.png'

const Vcard = ({codes}) => {
    
  return (
    <div class='basis-1/2 flex p-4 pl-4 justify-center  md:pl-5 lg:pl-2 xl:pl-4'>
        <img src={require(`./Card_assets/${codes.image}.png`)} alt="revenue" class=' w-10 h-10  '></img>
       <div class='ml-2 '> <div class='text-sm font-bold'>{codes.num}</div>
        <div class='text-xs '>{codes.text}</div></div>
    </div>
  )
}


export default Vcard

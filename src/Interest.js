import React from 'react'
import chat from './Card_assets/chat.png'

const interestdata = {
    num:'$350,665',
    text:'Interest Saved',
    text1:'Additional monthly payment',
    num1:'$142,650',
    text2:'Additional monthly payment',
    num2:'$125,638'
}
const Interest = () => {
  return (
    <div class=''>
        <div class=' rounded-full w-10 h-10 bg-zinc-200 ml-40  m-4 md:m-2 md:ml-10 lg:ml-16 lg:mt-2 lg:mb-1 xl:ml-24 xl:m-4'>
            <img src={chat} alt="Interest Saved" class='pl-2 pt-2 '></img></div>
        <div>
            <p class="text-center font-bold ">{interestdata.num}</p>
            <p class='text-center text-xs'>{interestdata.text}</p>
        </div>
        <div class='p-4 md:p-1 xl:p-4 '>
            <p class='text-xs leading-6 text-center md:text-left md:leading-4  xl:leading-6'>{interestdata.text1}</p>
            <p class='text-xs font-bold text-center md:text-left md:leading-4 xl:leading-6'>{interestdata.num1}</p>
            <p class='text-xs leading-6 text-center md:text-left md:leading-4 xl:leading-6'>{interestdata.text2}</p>
            <p class='text-xs font-bold text-center md:text-left md:leading-4 xl:leading-6'>{interestdata.num2}</p>
            
        </div>
    </div>
  )
}

export default Interest
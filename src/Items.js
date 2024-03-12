import React from 'react'
import { useState } from 'react'
import Vcard from './Vcard'

const Items = () => {
        const [items,setItems] =useState([
            {
            id:1,
            image: 'Icon_1',
            num:'$99,125.00',
            text:'Todays Revenue'
            },
            {
            id:2,
            image:'Icon_2',
            num:'365',
            text:'Transactions'
            }])
            
      return(
      <div class='border-2 rounded-lg flex mb-4 mx-6 bg-white/[0.2] border-blue-500  text-white md:mx-2 lg:mb-2 lg:mx-2 xl:mb-6 lg:mx-6 '>
        {items.map((item)=>{
            return(
                <Vcard key={item.id} codes={item} class='bg-white'/>
                
            )
            
        })}
        </div>
      )
    }

export default Items
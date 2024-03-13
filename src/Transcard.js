import React, {useState} from 'react'
import checkbox from './Card_assets/checkbox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Transcard = () => {
    const [trans,setTrans] = useState([{
        id:1,
        image:'checked',
        Dat:'Jan 2022',
        Status:"Paid",
        Amount:"USD $120",
        Plan:'Basic Plan',
        Actions:'Download'
    
    },
    {
        id:2,
        image:'checkbox',
        Dat:'Feb 2022',
        Status:'Paid',
        Amount:"USD $40",
        Plan:'Basic Plan',
        Actions:'Download'
    },
    {
        id:3,
        image:'checked',
        Dat:'Mar 2022',
        Status:'Paid',
        Amount:"USD $30",
        Plan:'Basic Plan',
        Actions:'Download'
    },
    {
        id:4,
        image:'checkbox',
        Dat:'Apr 2022',
        Status:'Paid',
        Amount:"USD $65",
        Plan:'Basic Plan',
        Actions:'Download'
    },
    {
        id:5,
        image:'checkbox',
        Dat:'May 2022',
        Status:'Paid',
        Amount:"USD $230",
        Plan:'Basic Plan',
        Actions:'Download'
    }])
  return (
    <div class='p-2  md:p-0 lg:p-2 xl:py-4'>
        <h4 class='font-bold p-2 text-sm'>Transactions</h4>
        <table class='mx-2 '>
            <tr class=' text-xs leading-5 border-b-2  md:leading-3 lg:leading-4 xl:leading-10'>
            <td class="pl-0 md:pl-2 lg:pl-10 xl:pl-0 "><img src={checkbox} alt='check box' class='w-3 h-3'></img></td>
            <td class='pl-2 md:pl-0 md:pr-1 lg:pl-3 lg:pr-0 xl:px-1'>All Invoices</td>
            <td class='pl-3  md:pl-2 lg:pl-10 xl:pl-20'>Status</td>
            <td class='pl-6 md:pl-4 lg:pl-14 xl:pl-20'>Amount</td>
            <td class='pl-6 md:pl-8 lg:pl-16 xl:pl-16'>Plan</td>
            <td class='pl-6 md:pl-2 lg:pl-8 xl:pl-16'>Actions</td>
            </tr>
            
               
                {trans.map((transaction)=>{
                    return(
                            <tr key={transaction.id} class='text-xs leading-6 border-b-2 md:leading-8 lg:leading-8 xl:leading-10'>
                         <td class='lg:pr-0'><img src={require(`./Card_assets/${transaction.image}.png`)} alt='checkbox'class='w-3 h-3 '></img></td>
                        <td class='pl-0 md:pl-0 lg:pl-0 xl:pl-1'>{transaction.Dat}</td>
                        <td class='pl-1 md:pl-1 lg:pl-8 xl:pl-20'><span class='border-2 text-green-500 bg-lime-50 rounded'><FontAwesomeIcon icon={faCheck}  />{transaction.Status}</span></td>
                        <td class='pl-3 md:pl-1 lg:pl-10 xl:pl-20'>{transaction.Amount}</td>
                        <td class='pl-2 md:pl-0 lg:pl-8  xl:pl-16'>{transaction.Plan}</td>
                        <td class='pl-3 font-bold md:pl-0 md:pr-0 lg:pl-6 xl:pl-16'>{transaction.Actions}</td> </tr>
                        
                    )
                })}
           </table>
       
    </div>
  )
}

export default Transcard
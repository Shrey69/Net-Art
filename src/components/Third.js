import React from 'react'

const Third = () => {
  return (
    <div>
      <div>
        <p className='font-serif px-6 text-xs md:text-base' >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      </div>
            
      <div className='flex justify-center items-center px-2 md:px-0'>
      <img className='w-[95%] md:w-[70%]'
            src={require("../images/3.png")} alt='IMAGE' />

      </div>

      <div className='flex justify-center items-center  px-5 md:px-0 py-2' >
      <p className='font-serif pl-6 md:pl-0 text-xs md:text-lg'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      
      </div>
      <hr class="h-px my-5 bg-red-600 border-y-red-200 py-0.5"/>
      
    </div>
  )
}

export default Third

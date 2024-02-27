import React from 'react'

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row pt-2 pl-2 md:pl-0'>
      <div className=''>
        <img className=' w-[70%] md:w-[85%] h-[60%] md:h-[90%]'
        src={require("../images/1.png")} 
        alt='Image'/>
      </div>

      <div>
        <div>
        <h1 className='font-bold font-serif pl-2 md:pl-0 text-sm md:text-lg'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1><br/>
        <ul className='list-disc px-10 font-serif font-medium'>
            <li >C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        </div>

        <div className=''>
            <img className='py-2 pl-5 md:pl-0 pr-8'
             src={require("../images/2.png")} alt='' />
        </div>
        <div>
            <p className='font-serif px-3 md:px-0 pb-6 md:pb-0'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
    </div>
  )
}

export default Main

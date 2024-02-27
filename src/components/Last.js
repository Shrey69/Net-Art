import React from 'react'

const Last = () => {
  const words = ["CHEMICALS & PROCESS", "POWER", "WATER & WASTE WATER", "OILS & GAS", "PHARMA", "SUGARS & DISTILLERIES", "PAPER & PULP", "MARINE & DEFENCE", "METAL & MINING", "FOOD & BEVERAGE", "PETROCHEMICAL & REFINERIES", "SOLAR", "BUILDING", "HVAC", "FIRE FIGHTING", "AGRICULTURE & RESIDENTIAL"]
  const textWithSeparator = words.map((word, index) => (
    <span key={index}>  
            {word}
      {index !== words.length - 1 && <span className="text-red-500 "> | </span>}
    </span>
  ));
  return (
    <div className='py-2'>
      <div className='flex justify-center items-center pb-4'>
        <p className='font-serif font-bold text-xs md:text-lg'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      </div>

      <div className='font-serif px-4 flex flex-wrap justify-center text-xs md:text-lg'>
        {textWithSeparator}
      </div>
    </div>
  )
}

export default Last;
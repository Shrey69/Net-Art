import React from 'react'

const Head = () => {
  return (
    <div className='h-32 w-full flex justify-center items-center'>
      <img 
        className='h-auto w-full md:w-96'
        src={require("../images/logo.png")}
        alt='Logo'
      />
    </div>
  )
}

export default Head;
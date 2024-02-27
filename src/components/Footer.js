import React from 'react';

const Footer = () => {
  return (
    <div className='p-2'>
      <div className='bg-red-500 p-5 md:p-10 flex flex-col md:flex-row justify-around items-center '>
        <a className='text-white font-semibold pb-2 md:pb-0'>Toll free 1800 200 1234</a>
        <a className='text-white font-semibold pb-2 md:pb-0'>www.facebook.com/cripumps</a>
        <a className='text-white font-semibold'>www.crigroups.com</a>
      </div>
    </div>
  );
};

export default Footer;

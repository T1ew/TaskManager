import React from 'react'
import UI_Img from '../../assets/images/bg-img.png'


const AuthLayout = ( { children }) => {
  return <div className='flex'>
    <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className='text-lg font-medium text-black'>Task Manager</h2>
        {children}
    </div>

    <div className="hidden md:flex w-[40vw] h-screen items-center justify-center overflow-hidden">
        <img src={UI_Img} className='w-full h-full object-cover' alt="" /> 
    </div>
  </div>
};

export default AuthLayout


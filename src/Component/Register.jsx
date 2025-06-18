import React from 'react'


const Register = () => {
  return (
    <div className='bg-[#efef] size-full flex items-center justify-center'>
      <form className='w-1/2 bg-amber-200 h-1/2 flex items-center justify-center flex-col gap-4 px-[80px] py-40'>
        <div className='w-full flex justify-center items-center'>
          <h1>Registation form</h1>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='Entername'className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='Enterusername'className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" placeholder='EnterEmail'className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" placeholder='Enterpassword'className='w-full outline-none px-4 h-10' />
        </div >
           <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" placeholder='Re-type-password' className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <button className='w-full outline-none px-4 h-10'>click</button>
        </div>
      </form>
    </div>
  )
}

export default Register
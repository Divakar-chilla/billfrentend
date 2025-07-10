import React from 'react'

const FilterBills = () => {
  return (
   <div className='bg-[#efefef] size-full flex justify-center items-center'>
          <form action="" className='w-1/2 h-[90%]  rounded-3xl bg-white shadow-2xl flex  items-center flex-col gap-8 px-[80px] py-20 max-sm:w-[90%] overflow-scroll'>
            <div className='font-bold w-full flex justify-center items-center'>
              <h1 className='text-3xl max-lg:text-sm'>Filter Bills</h1>
            </div>
    
            
    
    
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="PoNo" placeholder='Enter PoNo' className='w-full outline-none px-4 h-10' />
       
            </div>
    
    


               
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <label htmlFor="input">to invoiceDate</label>
              <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10'
              max={new Date().toISOString().split("T")[0]}/>
              </div>
              <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10'
              max={new Date().toISOString().split("T")[0]}/>
              </div>
              <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10'
              max={new Date().toISOString().split("T")[0]}/>
              </div>
              <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10'
              max={new Date().toISOString().split("T")[0]}/>
              </div>


        

          </form>
        </div>
  )
}

export default FilterBills
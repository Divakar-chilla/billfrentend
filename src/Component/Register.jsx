import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { MdEventRepeat } from "react-icons/md";


const Register = () => {
let [formdata,setformdata]=useState({
  username:"",
  password:"",
  name:"",
  email:""
})
let handelchange=e=>{
  let {name,value}=e.target
  setformdata((preval)=>({...preval,[name]:value}))
}
let handelsubmit=e=>{
  e.preventDefault()
  console.log(formdata);
}






  // let [password,setpassword]=useState("");
  // let [retypepassword,setretypepassword]=useState("")
  // hadelchangepassword=(e)=>{
  //   setpassword(e.target.value)
  //   if(retypepassword!==''&& e.target.value !==password){
  //     setPasswordMatchError(true)
  //   }else{

  //   }

  // }

  return (
    <div className='bg-[#efefef] size-full flex items-center justify-center'>
      <form className='w-1/2 bg-white h-[90%]  flex items-center justify-center flex-col gap-4 px-[80px] py-40 shadow-md rounded-3xl max-sm:w-[90%] ' onSubmit={handelsubmit}>
        <div className='w-full flex justify-center items-center'>
          <h1 className='font-extrabold max-md '>Registation form</h1>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text"  name='name' placeholder='Entername'className='w-full outline-none px-4 h-10'onChange={handelchange} />
          <span><CgNametag /></span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='Enterusername' name='username'className='w-full outline-none px-4 h-10' onChange={handelchange} />
             <span><CgRename /></span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" placeholder='EnterEmail' name='email'className='w-full  outline-none px-4 h-10' onChange={handelchange} />
             <span><MdAttachEmail /></span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" placeholder='Enterpassword' name='password'className='w-full outline-none px-4 h-10' onChange={handelchange}/>
             <span><TbLockPassword /></span>
        </div >
           <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" placeholder='Re-type-password' className='w-full outline-none px-4 h-10' />
             <span><MdEventRepeat /></span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm bg-black'>
          <button className='w-full outline-none px-4 h-10 text-white font-bold text-md tracking-widest'>click</button>
        </div>
      </form>
    </div>
  )
}

export default Register
import React, { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { TfiMenuAlt } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
 const [show,setShow]=useState(false)
 const handelShow=()=>{
    setShow(!show)
 }
// console.log(show);
return(
    <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:justify-start max-sm:px-8${show?'h-[210px] flex flex-col justify-around gap-2.5 items-start py-2.5':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
        <div className='hidden max-sm:flex '>
            {
                show?<FaRegWindowClose onClick={handelShow}/>:<TfiMenuAlt onClick={handelShow}/>
            }
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="/home">Home</NavLink>
        </div>
             <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="addbills">AddBills</NavLink>

        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="filterBills">FilterBills</NavLink>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="about">About</NavLink>
        </div>

    </div>
)
}

export default NavBar
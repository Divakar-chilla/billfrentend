import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const contextApi=createContext()
const {Provider}=contextApi
const Context = ({children}) => {
  const [globalState,setglobalState]=useState({
    token:null
  })

  return (
    <Provider value={{globalState,setglobalState}}>{children}</Provider>
  )
}

export default Context
import React, { useEffect } from 'react'
import { getData } from './api'

const HomePage = () => {

  useEffect(()=> {
    getData()
    
  },[])

  return (
    <div>
      Home page
    </div>
  )
}

export default HomePage

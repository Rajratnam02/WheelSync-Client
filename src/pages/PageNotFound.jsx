import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex-col flex items-center justify-center bg-black/20 backdrop-blur-2xl'>
        <p className='text-9xl  inter-600'>404 Page Not Found</p>
        <p className='text-2xl  mt-20 inter-600'>Take me <span onClick={() => navigate("/")} className='cursor-pointer text-teal-500'>Home</span></p>
    </div>
  )
}

export default PageNotFound
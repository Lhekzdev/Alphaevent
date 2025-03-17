import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const TermsSer = () => {


  let redir = useNavigate();
  return (
    <div className="flex text-[30px] flex-col items-center justify-center h-screen">
        <h1 className='text-customRed  hover:text-black font-extrabold transition-transform'>Please input Terms of Service designed</h1>
    <button onClick={()=> redir('/')} className="justify-center text-wrap "> Go back Home </button>  
    </div>
  )
}
export default TermsSer
 import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
 import ChangePassword from "./ChangePassword";
 
 const SecurityTab =()=>{


 
const [eventModal,setEventModal] =useState(false)
    const [onToggle,setonToggle] =useState(false)

    const handleToggleClick =()=>{

       
       setonToggle(prev=> !prev); 
    }

    try {
return( 
    
    <div className={`max-w-[1056px] relative flex flex-col gap-y-5 font-Lato h-auto px-[20px] py-[10px] ${eventModal ? "bg-black bg-opacity-50" : "block"}`}>


<div onClick={()=>setEventModal(true) } className="flex w-[832px] cursor-pointer justify-between  items-center ">
<ol className="flex flex-col gap-y-[4px]">
    <li className="text-[20px] font-bold ">Change Password</li>
    <li className="text-[#ABABAB] text-[16px] ">Create a new password</li>
</ol>

<ol ><img  src="/arrorright.svg" alt="arror-right" className={eventModal ? "hidden" : "block"}/></ol>



</div>

{/* Two-Factor Authentication (2FA) */}

<div className="flex w-[832px] h-[70px] justify-between">
    <div className="flex flex-col gap-[12px] w-[437px] h-[70px]">
        <ol className="min-w-[350px] h-[20px] font-bold text-[20px] ">Two-Factor Authentication (2FA)</ol>
        <ol className=" text-[#ABABAB] w-[437px] h-[38px]">We recommend requiring a verification code in addition to your password.</ol>
        

    </div>
    <div>
              <div
onClick={handleToggleClick}
  className={`w-[48px] h-[28px] rounded-[20px] p-[4px] relative cursor-pointer transition-colors duration-300 ${
    onToggle ? 'bg-[#E5E5E5]' : 'bg-[#E5E5E5]'
  }`}
>
  <div
  
    className={`w-[20px] h-[20px] rounded-full absolute top-1 transition-all duration-300 ${
      onToggle? 'right-1 bg-[#2D6CCF]'  : 'left-1 bg-white'
    }`}
  ></div>
</div>
    </div>

   
</div>


<div> <ol className="flex gap-[8px]">
    <li ><img src="/activated.svg" alt="activated" /></li>
    <li className="text-[#008000] text-[16px] font-normal">Activated</li>

    </ol>
    </div>
    
{/* "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" */}
<div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
{eventModal && <ChangePassword 
 setClose ={setEventModal} 

 />}
</div>

</div>
)
        




        
    } catch (error) {
        console.log(error);
        
    } }

 export default SecurityTab ;
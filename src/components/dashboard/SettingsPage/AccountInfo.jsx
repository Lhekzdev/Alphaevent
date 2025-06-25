 import React, { useState } from "react";

 const AccountInfo =()=>{


const [isClicked,setIsclicked] =useState(false)
const handleClick =()=>{
setIsclicked(true)
}


    return(
<div className="px-5 flex flex-col border  border-[#BEBEBE] rounded-[12px] pb-5 pt-5 h-auto gap-y-4">
    <div className="flex flex-col">
     <label htmlFor="">Account Number</label> 
     <input type="text" className="border-[1.4px]  text-[#C5C5C5] rounded-[12px] max-w-[992px] h-[52px] px-[20px]  bg-gray-100 border-[#BEBEBE]" placeholder="Enter Account Number" />  
    </div>




<div className="flex  gap-x-[80px] justify-between  h-[79px] ">
    <div  className="flex flex-1   gap-y-[8px] flex-col">
   <ol>  <label htmlFor="">Account Name</label>  </ol>  
     <input type="text" className=" px-[20px] text-[#BEBEBE] rounded-[12px] h-[52px]  bg-gray-100 border border-[#BEBEBE]" placeholder="Enter Account Name" />
    
    </div>
    <div className="flex flex-1 flex-col gap-y-[8px]">
     <ol><label  htmlFor="">Bank Name</label> 
     <input type="text" className=" bg-gray-100  px-[20px] w-full  text-[#BEBEBE] border border-[#BEBEBE] rounded-[12px] h-[52px]" placeholder="Enter Bank name" />  
</ol>    </div>

</div>

<div className="flex justify-end gap-[20px]">
    <button   className="w-32 hover:bg-[#4F86DC] border border-[#BEBEBE] h-[48px] rounded-[8px] text-center  bg-gray-200"
          >Cancel</button>
    <button className="w-[114px] h-[48px] hover:bg-[#4F86DC] border border-[#BEBEBE] rounded-[8px] text-center">Save</button>
</div>



</div>


    )


 }

 export default AccountInfo;
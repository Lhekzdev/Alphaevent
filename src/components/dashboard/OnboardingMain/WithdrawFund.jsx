import React from 'react'
import { useNavigate } from 'react-router-dom';

const WithdrawFund = () => {
    const navigate = useNavigate();
    
  return (
    <section className="bg-black flex items-center justify-center w-full h-screen ">
      <div className="bg-white rounded-[12px]  shadow-sm w-[646px] h-[290px] p-[20px]">
        <div className='border border-1 border-[#C5C5C5] p-[20px] rounded-[12px]'>
        <form action="">
        <input type="text" placeholder='Amount' className='text-[#333333] text-[16px] border boder-1 border-[#C5C5C5]  rounded-[8px] w-[566px] h-[52px] p-[10px] mb-[20px]'/>
        <input type="text" placeholder='Note(Optional)' className=' text-[16px] text-[#333333] border boder-1 border-[#C5C5C5]  rounded-[8px] w-[566px] h-[52px] p-[10px] mb-[38px]'/>
            <div className='flex gap-[20px] items-center justify-end'>
            <button
            onClick={() => navigate("/Finance")}
            className="w-[128px] h-[48px] border border-1 border-[#333333] text-[#333333] text-[16px] rounded-[10px] font-bold"
          >
           Cancel
          </button>
            <button
            onClick={() => navigate("/ConfirmWithdrawal")}
            className="w-[115px] h-[48px] border border-1 border-[#4F86DC] text-[#FFFFFF] text-[16px] rounded-[10px] font-bold bg-[#4F86DC] "
          >
           Next
          </button>
            </div>
        </form>
        </div>
        </div>
        </section>
  )
}

export default WithdrawFund
import React from 'react'
import closeWithdrawIcon from '../../../assets/closeWithdrawIcon.svg'
import { useNavigate } from 'react-router-dom';

const ConfirmWithdrawal = () => {
      const navigate = useNavigate();
  return (
    
    <section className="bg-black flex items-center justify-center w-full h-screen ">
      <div className="bg-white rounded-[12px]  shadow-sm w-[600px] h-[470px] p-[20px]">
        
    <div className='flex items-center justify-end gap-[120px]'>
        
        <p className='pt-[25px] text-[#333333] text-[24px] font-extrabold'>Confirm Withdrawal</p>
        <img src={closeWithdrawIcon} alt=""  onClick={() => navigate("/Finance")} />
    </div>
    <div className='text-[#333333] text-[16px] font-bold flex flex-col items-center justify-center mt-[65px] gap-[24px] mb-[55px]'>
        <p>You are withdrawing ₦<span>20,000</span><span>.00</span></p>
        <p>Note: Event</p>
    </div>

            <div className='flex gap-[40px] flex-col items-center justify-center'>
            <button
            onClick={() => navigate("/WithdrawalSuccessfully")}
            className="w-[135px] h-[56px] bg-[#008000] border border-1 border-[#008000] text-[#FFFFFF] text-[20px] rounded-[10px] font-bold"
          >
           Confirm
          </button>
            <button
            onClick={() => navigate("/Finance")}
            className="w-[136px] h-[56px] border border-1 border-[#F8F9FC] text-[#2F3B4C] text-[20px] rounded-[10px] font-bold bg-[#F8F9FC] "
          >
         Go back
          </button>
            </div>
       
        </div>
        </section>
  )
}

export default ConfirmWithdrawal
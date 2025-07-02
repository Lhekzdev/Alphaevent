import React from 'react'
import closeWithdrawIcon from '../../../assets/closeWithdrawIcon.svg'
import { useNavigate } from 'react-router-dom';

const WithdrawalSuccessfully = () => {
      const navigate = useNavigate();
  return (
    
    <section className="bg-black flex items-center justify-center w-full h-screen ">
      <div className="bg-white rounded-[12px]  shadow-sm w-[600px] h-[320px] p-[20px]">
        
    <div className='flex items-center justify-end gap-[60px]'>
        
        <p className='pt-[20px] text-[#333333] text-[24px] font-extrabold'>Withdrawal Placed Successfully</p>
        <img src={closeWithdrawIcon} alt=""  onClick={() => navigate("/Finance")}/>
    </div>
    <div className='text-[#333333] text-[16px] font-bold flex flex-col items-center justify-center mt-[65px] mb-[30px]'>
        <p>Your withdrawal request has been submitted.</p>
        <p>You will be notified once it’s processed.</p>
    </div>

            <div className='flex gap-[40px] flex-col items-center justify-center'>
            <button
            onClick={() => navigate("/Finance")}
            className="w-[205px] h-[56px] bg-[#008000] border border-1 border-[#008000] text-[#FFFFFF] text-[20px] rounded-[10px] font-bold"
          >
      Back to Finance
          </button>
            </div>
       
        </div>
        </section>
  )
}
export default WithdrawalSuccessfully
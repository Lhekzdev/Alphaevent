import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const WithdrawFund = () => {
  const [modalStep, setModalStep] = useState("confirm");
  // "confirm" | "success"
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  return (
    <section className="bg-[#F3F5FA] mt-3 flex items-center justify-center w-full h-full ">
      <div className="bg-white rounded-[12px]  shadow-sm w-[646px] h-[290px] p-[20px]">
        <div className='border border-1 border-[#C5C5C5] p-[20px] rounded-[12px]'>
          <form action="">
            <input type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} className='text-[#333333] text-[16px] border boder-1 border-[#C5C5C5]  rounded-[8px] w-[566px] h-[52px] p-[10px] mb-[20px]' />
            <input type="text"
              placeholder="Note (Optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)} className=' text-[16px] text-[#333333] border boder-1 border-[#C5C5C5]  rounded-[8px] w-[566px] h-[52px] p-[10px] mb-[38px]' />
            <div className='flex gap-[20px] items-center justify-end'>
              <button
                onClick={() => navigate("/Finance")}
                className="w-[128px] h-[48px] border border-1 border-[#333333] text-[#333333] text-[16px] rounded-[10px] font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  navigate("/ConfirmWithdrawal", {
                    state: { amount, note }
                  })
                }
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
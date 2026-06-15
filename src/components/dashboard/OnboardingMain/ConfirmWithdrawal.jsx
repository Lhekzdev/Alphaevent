import React,{useState,useContext} from 'react'
import closeWithdrawIcon from '../../../assets/closeWithdrawIcon.svg'
import { useNavigate ,useLocation} from 'react-router-dom';
import { toast } from 'react-toastify';

const ConfirmWithdrawal = ({userID}) => {
  const [loading, setLoading] = useState(false);
      const navigate = useNavigate();

const handleConfirmWithdrawal = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("authToken");
  console.log(localStorage);
console.log(Object.keys(localStorage));

console.log("TOKEN:", token);

    const response = await fetch(
      `https://alphaeventappdevmode.onrender.com/api/request-withdrawal/${userID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount,
          reason: note,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);

      navigate("/WithdrawalSuccessfully", {
        state: {
          amount,
          note,
        },
      });
    } else {
      toast.error(data.message || "Withdrawal failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Network error");
  } finally {
    setLoading(false);
  }
};

  const { state } = useLocation();

  const amount = state?.amount ?? 0;
const note = state?.note ?? "No note provided";

  return (
    
    <section className="bg-black flex items-center justify-center w-full h-screen ">
      <div className="bg-white rounded-[12px]  shadow-sm w-[600px] h-[470px] p-[20px]">
        
    <div className='flex items-center justify-end gap-[120px]'>
        
        <p className='pt-[25px] text-[#333333] text-[24px] font-extrabold'>Confirm Withdrawal</p>
        <img src={closeWithdrawIcon} alt=""  onClick={() => navigate("/Finance")} />
    </div>
  <div className='text-[#333333] text-[16px] font-bold flex flex-col items-center justify-center mt-[65px] gap-[24px] mb-[55px]'>

  <p>
    You are withdrawing ₦
    <span className="font-extrabold">{amount || 0}</span>
    <span>.00</span>
  </p>

  <p>
    Note: {note || "No note provided"}
  </p>

</div>

            <div className='flex gap-[40px] flex-col items-center justify-center'>
       <button
  onClick={handleConfirmWithdrawal}
  disabled={loading}
  className="w-[135px] h-[56px] bg-[#008000] border border-[#008000] text-white text-[20px] rounded-[10px] font-bold flex items-center justify-center"
>
  {loading ? (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    "Confirm"
  )}
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
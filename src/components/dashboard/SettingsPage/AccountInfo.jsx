import React, { useState,useEffect } from "react";
import { useEventForm } from "../../context/context";
import { toast } from "react-toastify";
const AccountInfo = () => {


    const [isClicked, setIsclicked] = useState(false)
    const handleClick = () => {
        setIsclicked(true)
    }

    // create state
    const [accountInfo, setAccountInfo] = useState({
        bankName: "",
        accountNumber: "",
        accountHolderName: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setAccountInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // create loading state
const [loading, setLoading] = useState(false);
    
 const { userID } = useEventForm();
// save to backend
    const handleSave = async () => {
  try {
    setLoading(true);

    const response = await fetch(
      `https://alphaeventappdevmode.onrender.com/api/orgBankDetails/${userID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accountInfo),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg);
    }

    toast.success("Bank details updated successfully! 🎉");
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to update bank details");
  } finally {
    setLoading(false);
  }
};

// fetchbankdetails from backend
useEffect(() => {
  const fetchBankDetails = async () => {
    try {
      const response = await fetch(
          `https://alphaeventappdevmode.onrender.com/api/orgBankDetailsfetch/${userID}`,
      );

      const data = await response.json();

      if (response.ok) {
        setAccountInfo(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchBankDetails();
}, [userID]);


    return (
        <div className="px-5 flex flex-col border  border-[#BEBEBE] rounded-[12px] pb-5 pt-5 h-auto gap-y-4">
            <div className="flex flex-col">
                <label htmlFor="">Account Number</label>
                <input
                    type="text"
                    name="accountNumber"
                    value={accountInfo.accountNumber}
                    onChange={handleChange}
                    className="border-[1.4px] rounded-[12px] max-w-[992px] h-[52px] px-[20px] bg-gray-100 border-[#BEBEBE]"
                    placeholder="Enter Account Number"
                />
            </div>




            <div className="flex  gap-x-[80px] justify-between  h-[79px] ">
                <div className="flex flex-1   gap-y-[8px] flex-col">
                    <ol>  <label htmlFor="">Account Name</label>  </ol>
                    <input
                        type="text"
                        name="accountHolderName"
                        value={accountInfo.accountHolderName}
                        onChange={handleChange}
                        className="px-[20px] rounded-[12px] h-[52px] bg-gray-100 border border-[#BEBEBE]"
                        placeholder="Enter Account Name"
                    />

                </div>
                <div className="flex flex-1 flex-col gap-y-[8px]">
                    <ol><label htmlFor="">Bank Name</label>
                       <input
  type="text"
  name="bankName"
  value={accountInfo.bankName}
  onChange={handleChange}
  className="bg-gray-100 px-[20px] w-full border border-[#BEBEBE] rounded-[12px] h-[52px]"
  placeholder="Enter Bank Name"
/>
                    </ol>    </div>

            </div>

            <div className="flex justify-end gap-[20px]">
    <button
  onClick={handleSave}
  disabled={loading}
  className="w-[114px] h-[48px] bg-[#123499] text-white rounded-[8px] flex items-center justify-center gap-2 disabled:opacity-70"
>
  {loading ? (
    <>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Saving...</span>
    </>
  ) : (
    "Save"
  )}
</button>
               
            </div>



        </div>


    )


}

export default AccountInfo;
import React, { useEffect, useState } from "react";

const ProfileEditModal = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
 socialMediaLinks: "", websiteURL:"",bio:"", phoneNumber:"", email:"", fullName:""

  }


  )


  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isOpen) return null;





  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);

// clear Form
useEffect(() => {
  if (isOpen) {
    setFormData({
      websiteURL: "",
      bio: "",
      phoneNumber: "",
      email: "",
      fullName: "",
      socialMediaLinks: ""
    });
  }
}, [isOpen]);

    } catch (error) {
      console.error('Submission failed:', error);
// close after submission
      onClose()
    }
  };




  return (
    <div className="fixed inset-0 flex  pl-72 h-screen no-scrollbar flex-col px-4  overflow-auto py-[40px]  max-w-[960px]  z-50">
      <div className="bg-white px-[40px]  rounded-[20px] py-[60px] shadow-lg   ">

        {/* <div className="fixed inset-0 flex justify-center items-center overflow-auto px-4 py-10 z-50">
  <div className="bg-black px-6 md:px-10 rounded-[20px] py-[60px] shadow-lg max-w-md w-auto"></div> */}
        <h2 className="text-xl font-semibold mb-4">Edit My Profile</h2>

        <form onSubmit={handleSubmit} className="  space-y-4">

          {/* Instagram */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="fullName" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Full Name</h6>
            </label>
            <input type="text" name="fullName" onChange={handleChange} value={formData.fullName} id="fullName" placeholder="Full Name" className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>


          {/* Email */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="email" type="email" name="email" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Email</h6>
            </label>
            <input type="email" placeholder="Email" value={formData.email} id="email" name="email" onChange={handleChange} className=" px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Phone Number */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="phoneNumber" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Phone Number</h6>
            </label>
            <input type="tel" name="phoneNumber" onChange={handleChange} id="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" className=" px-[20px] h-[52px] border rounded-[12px]" />
          </div>


          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="bio" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Bio</h6>
            </label>
            <input type="text" placeholder="Bio" name="bio" id="bio" onChange={handleChange} value={formData.bio} className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Organization Name */}

          <div className="flex text-[#C5C5C5] w-full gap-[12px]">
            <div className="w-full">
              <label htmlFor=""> <h6>State</h6>
              </label>
              <select className=" border w-full h-[52px]  border-[#BEBEBE] px-[20px]   rounded-[12px]">
                <option ><h4 className="text-[#C5C5C5]">Select State</h4></option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor=""> <h6>Country</h6>
            </label>
              <select className=" border w-full h-[52px]  border-[#BEBEBE] px-[20px]   rounded-[12px]">
                <option ><h4 className="text-[#C5C5C5]">Select Country</h4></option>
              </select>
            </div>

          </div>



          {/* Website URL */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="Website URL" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Website URL</h6>
            </label>
            <input type="url" name="websiteURL" value={formData.websiteURL} id="websiteURL" onChange={handleChange} placeholder="Website URL" className="w-full  px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Social Media Links */}
          <div className="flex flex-col gap-y-[8px]">

            <label htmlFor="Social Media Links" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Social Media Links</h6>
            </label>
            <select name="socialMediaLinks" onChange={handleChange}
             className="  px-[20px] h-[52px] border rounded-[12px]" 
             id="socialMediaLinks " value={formData.socialMediaLinks}>

            <option disabled className="text-[#525252]" >-- Select Platform -- </option>
            <option value="instagram"> Instagram </option>
            <option value="x">  X (Twitter) </option>
            <option value="facebook"> Facebook</option>

            </select>


          </div>




      


          <div className=" flex flex-col gap-2">
            <button type="button" onClick={onClose} className=" text-[#C5C5C5] hover:text-black  mx-auto w-20 px-[20px]  h-[52px] border rounded-[12px]">Cancel</button>
            <button type="submit"  className=" text-[#C5C5C5] px-[20px] hover:text-black h-[52px] border rounded-[12px]">Save Changes</button>
            <button type="button" className=" text-[#FF0000] px-[20px] border-[#FF0000] h-[52px] border hover:bg-[#FF0000] hover:text-[#FFFFFF] font-bold text-[16px] rounded-[12px]">Delete my Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
















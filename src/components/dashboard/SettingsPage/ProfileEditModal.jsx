import React, { useEffect, useState } from "react";
import { useEventForm } from "../../context/context";
import { toast } from "react-toastify";


const ProfileEditModal = ({ isOpen, onClose, onProfileUpdated }) => {
  const [loading, setLoading] = useState(false);

  const { userID } = useEventForm();




  const [contentFormData, setContentFormData] = useState({
    fullName: "",
    email: "",
    photo: "",
    phone: {
      countryCd: "",
      phnNum: "",
    },
    bio: "",
    orgName: "",
    address: "",   // ✅ ADD THIS
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      website: "",
    },
  });

// for upload image
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setContentFormData((prev) => ({
        ...prev,
        photo: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!isOpen || !userID) return;

    async function getProfile() {
      try {
        const response = await fetch(
          `https://alphaeventappdevmode.onrender.com/api/orgProfile/${userID}`
        );

        const data = await response.json();

        console.log("Profile Data:", data);

        setContentFormData({
          fullName: data.data.name || "",
          email: data.data.email || "",
          phone: {
            countryCd: contentFormData.phone.countryCd,
            phnNum: contentFormData.phone.phnNum,
          }, address: data.data.address || "",
          bio: data.data.bio || "",
          orgName: data.data.orgName || "",
          socialLinks: {
            facebook: data.data.socialLinks?.facebook || "",
            twitter: data.data.socialLinks?.twitter || "",
            instagram: data.data.socialLinks?.instagram || "",
            website: data.data.socialLinks?.website || "",
          },
        });
      } catch (error) {
        console.error(error);
      }
    }

    getProfile();
  }, [isOpen, userID]);

  const handleSocialChange = (e) => {
    const { name, value } = e.target;

    setContentFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     setContentFormData({
  //       fullName: "",
  //       email: "",
  //       phoneNumber: "",
  //       bio: "",
  //       socialLinks: {
  //         facebook: "",
  //         twitter: "",
  //         instagram: "",
  //         website: "",
  //       },
  //     });
  //   }
  // }, [isOpen]);



  // "68545da4e864b5840ad97523"


  localStorage.getItem('userID');

  if (!userID) {
    console.error("User not logged in");
    return;
  }


  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isOpen) return null;




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `https://alphaeventappdevmode.onrender.com/api/orgProfileUpdate/${userID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contentFormData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      toast.success("Profile updated successfully! 🎉");



      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 2000);


    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="fixed inset-0 flex  pl-72 h-screen no-scrollbar flex-col px-4  overflow-auto py-[40px]  max-w-[960px]  z-50">
      <div className="bg-white px-[40px]  rounded-[20px] py-[60px] shadow-lg   ">

        {/* <div className="fixed inset-0 flex justify-center items-center overflow-auto px-4 py-10 z-50">
  <div className="bg-black px-6 md:px-10 rounded-[20px] py-[60px] shadow-lg max-w-md w-auto"></div> */}
        <h2 className="text-xl font-semibold mb-4">Edit My Profile</h2>

        <form onSubmit={handleSubmit} className="  space-y-4">
          <div className="flex flex-col gap-y-2">
            <label>Profile Photo</label>

            <input
          
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="fullName" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Full Name</h6>
            </label>
            <input disabled type="text" name="fullName" onChange={handleChange} value={contentFormData.fullName} id="fullName" placeholder="Full Name" className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>


          {/* Email */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="email" type="email" name="email" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Email</h6>
            </label>
            <input type="email" placeholder="Email" disabled value={contentFormData.email} id="email" name="email" onChange={handleChange} className=" px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Phone Number */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="phoneNumber" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Phone Number</h6>
            </label>
            <input name="phnNum"
              value={contentFormData.phone.phnNum}
              onChange={(e) =>
                setContentFormData((prev) => ({
                  ...prev,
                  phone: {
                    ...prev.phone,
                    phnNum: e.target.value,
                  },
                }))
              } className=" px-[20px] h-[52px] border rounded-[12px]" />
          </div>


          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="bio" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Bio</h6>
            </label>
            <input type="text" placeholder="Bio" name="bio" id="bio" onChange={handleChange} value={contentFormData.bio} className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>

          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="bio" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Organization Name</h6>
            </label>
            <input type="text" placeholder="Enter Organization Name" name="orgName" id="orgName" onChange={handleChange} value={contentFormData.orgName} className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* state and country */}

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
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="address" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Address</h6>
            </label>
            <input type="text" placeholder="Address" name="address" id="address" onChange={handleChange} value={contentFormData.address} className="  px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Website URL */}
          <div className="flex flex-col gap-y-[8px]">
            <label htmlFor="Website URL" className="w-[482px] h-[16px] pr-[8px] pl-[8px] text-[#525252] font-bold">
              <h6 >Website URL</h6>
            </label>
            <input type="url" name="websiteURL" value={contentFormData.socialLinks.website} id="websiteURL" onChange={handleChange} placeholder="Website URL" className="w-full  px-[20px] h-[52px] border rounded-[12px]" />
          </div>



          {/* Social Media Links */}
          <div className="flex flex-col gap-y-4">
            <label className="font-bold text-[#525252]">
              Social Media Links
            </label>

            <input
              type="url"
              name="facebook"
              placeholder="Facebook URL"
              value={contentFormData.socialLinks.facebook}
              onChange={handleSocialChange}
              className="px-[20px] h-[52px] border rounded-[12px]"
            />

            <input
              type="url"
              name="twitter"
              placeholder="Twitter / X URL"
              value={contentFormData.socialLinks.twitter}
              onChange={handleSocialChange}
              className="px-[20px] h-[52px] border rounded-[12px]"
            />

            <input
              type="url"
              name="instagram"
              placeholder="Instagram URL"
              value={contentFormData.socialLinks.instagram}
              onChange={handleSocialChange}
              className="px-[20px] h-[52px] border rounded-[12px]"
            />

            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={contentFormData.socialLinks.website}
              onChange={handleSocialChange}
              className="px-[20px] h-[52px] border rounded-[12px]"
            />
          </div>







          <div className=" flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={onClose} className="  hover:bg-blue-800   mx-auto w-full px-[20px] hover:text-white  h-[52px] border rounded-[12px]">Close Edit</button>
              <button
                type="submit"
                disabled={loading}
                className="px-[20px] h-[52px] border rounded-[12px] hover:bg-blue-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
            <button type="button" className=" text-[#FF0000] px-[20px] border-[#FF0000] h-[52px] border hover:bg-[#FF0000] hover:text-[#FFFFFF] font-bold text-[16px] rounded-[12px]">Delete my Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
















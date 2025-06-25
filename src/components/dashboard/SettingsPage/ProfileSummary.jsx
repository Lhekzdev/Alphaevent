import React from "react";

const ProfileSummary = ({ onEdit }) => {
  return (
   <div className="flex max-w-[832px] justify-between gap-[20px] font-Lato    items-center px-[20px] py-[10px]">
    <div className="p-4  h-[1024px] rounded relative">


                     <div className="flex flex-col  gap-y-[20px]">
                        <div className="md:w-[432px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="min-w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                 <li className="text-[16px] font-bold"><h4>Photo <span className="text-[#FF0000]">*</span></h4></li>
                                 <li className="text-[#ABABAB] "><p>This will be displayed on your profile</p></li>

                             </ol>
                             <ol><img src="" alt="profile-img" /></ol>
                         </div>
                         <div className="w-[600px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li className="text-[16px] font-bold"><h4>Full Name <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] w-full font-normal"><p>This will be displayed on your profile</p></li>

                            </ol>
                            <ol  className="text-[16px] font-bold"><h4 className="w-[146px] text-[#ABABAB] h-[16px]">Cameron Williamson</h4></ol>
                        </div>


                         <div className="w-[718px] py-[20px] border-b-[1px] items-center flex   gap-[120px]">

                             <ol className="min-w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li className="text-[16px] font-bold"> <h4>Contact Info <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] font-normal"><p>This will be displayed on your profile</p></li>

                           </ol>
                            <ol className="w-[346px] text-[#ABABAB]  text-[16px] h-[56px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]"><h4 className="text-[16px] font-bold">Email Address</h4>
                                    <h4>Cameron.graham@example.com</h4>
                               </li>
                               <li className="  text-[16px] font-bold flex  items-center gap-[20px]"><h4>Phone Number</h4>
                                   <h4>+XXX XXX XXX  XXXX</h4>
                                </li>

                           </ol>
                        </div>
  {/* <div className="pb-[20px]   flex  border-b-[1px]">
    <ol className="w-[252px] h-[60px]">  <h4 className="w-[253px]   block h-[60px] text-[18px]">Bio</h4></ol>

                           


                        <ol><h4 className="w-[400px] h-[60px]   text-[#ABABAB]">Organizer Description</h4></ol>   

                       </div> */}



      <div className=" pb-[20px] border-b-[1px] items-center     gap-[120px] flex  h-[60px] ">

                             <ol className="min-w-[252px] text-[16px] font-bold  md:h-[60px] ">
                                <h4 className="">Bio </h4></ol>
                                {/* <li className="text-[#ABABAB] font-extralight"><p>This will be displayed on your profile</p></li> */}

                           
                            <ol className="w-[436px]  text-[#ABABAB]  text-[16px] ">
                                 <h4> Organizer Description</h4>
                                    
                              
                              

                           </ol>
                        </div>


                           <div className="w-[767px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="min-w-[252px] text-[16px] font-bold  md:h-[60px]  ">
                                <li><h4>Organization Name </h4></li>


                           </ol>
                            <ol className="w-[436px] text-[#ABABAB]font-bold text-[16px] h-[56px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]"><h4>----------------</h4>
                                    
                               </li>
                              

                           </ol>
                        </div>


                           <div className="w-[471px] pb-[20px] border-b-[1px] text-center items-center flex  h-[60px] justify-between gap-[120px]">

                             <ol className="min-w-[252px] flex text-[16px] font-bold">
                                <li className=""> Address/Location  </li>
                                {/* <li className="text-[#F8F9FC] font-normal"><p>This will be displayed on your profile</p></li> */}

                           </ol>
                            <ol className="w-[436px] text-[#ABABAB]  text-[16px]  ">
                                <li className="">Lagos, Nigeria
                                    
                               </li>
                              

                           </ol>
                        </div>




                           <div className="w-[641px] pb-4  border-b-[1px]  flex  h-auto gap-[120px]">

                             <ol className="min-w-[252px] text-[16px] font-bold md:h-[60px] flex flex-col gap-y-[8px]">
                                <li><h4>Website/Social Media Links </h4></li>
                                {/* <li className="text-[#F8F9FC] font-normal"><p>This will be displayed on your profile</p></li> */}

                           </ol>
                            <ol className="w-[269px] text-[#ABABAB]  text-[16px] h-[120px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]">
                                  <h4>Website</h4>    
                                  <h4>www.example.com</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4>Twitter</h4>    
                                  <h4>https://x.com/username</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4>Facebook</h4>    
                                  <h4>https://x.com/username</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4>Instagram</h4>    
                                  <h4>instagram.com/username</h4>    
                                   </li>
                                    
                          
                              

                           </ol>
                        </div>
                  </div>
      
       {/* <div className="grid grid-cols-[120px_1fr] gap-x-4">
    <span className="font-semibold">Website:</span>
    <span>www.example.com</span>
  </div> */}

      {/* Edit icon */}
      <button
        onClick={onEdit}
        className="float-end"
      >
        <img className="rounded-[60px] absolute  w-[64px] h-[64px] p-[16px] " src="/onclick.svg" alt="click-icon" />
      </button>
    </div>
    </div>
  );
};

export default ProfileSummary;

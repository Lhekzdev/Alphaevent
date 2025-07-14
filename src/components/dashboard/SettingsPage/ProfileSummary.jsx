import React from "react";
import { useEffect,useState } from "react";





const ProfileSummary = ({ onEdit }) => {
 const [userData, setUserData] = useState(null);
// get User
 useEffect(() => {
    const userID = 
    "68545da4e864b5840ad97523"
    
   //   localStorage.getItem('userID');

   //  if (!userID) {
   //    console.error("User not logged in");
   //    return;
   //  }
     



 
      async function getUserDetails(){
   try{
      const response = await fetch (`https://alphaeventappdevmode.onrender.com/api/orgProfile/${userID}`);
      const data = await response.json();
      setUserData(data.data) // Save data to state
      console.log('userData',data);
      
   }catch(error){
console.log('Fetch error:', error);

   }
}
getUserDetails()


   }, [])
     if (!userData) {
    return <p>Loading...</p>; // Show loader until data is fetched
  }



  return (
   <div className="flex max-w-[832px] justify-between gap-[20px] font-Lato    items-center px-[20px] py-[10px]">
    <div className="p-4  h-[1024px] rounded relative">


                     <div className="flex flex-col  gap-y-[20px]">
                        <div className="md:w-[432px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="min-w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                 <li className="text-[16px] font-bold"><h4>Photo <span className="text-[#FF0000]">*</span></h4></li>
                                 <li className="text-[#ABABAB] "><p>This will be displayed on your profile</p></li>

                             </ol>
                             <ol><img src={userData.photo} alt="profile-img" /></ol>
                         </div>
                         <div className="w-[600px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li className="text-[16px] font-bold"><h4>Full Name <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] w-full font-normal"><p>This will be displayed on your profile</p></li>

                            </ol>
                            <ol  className="text-[16px] font-bold"><h4 className="w-[146px] text-[#ABABAB]  h-[16px]">{userData.name}</h4></ol>
                        </div>


                         <div className="w-[718px] py-[20px] border-b-[1px] items-center flex   gap-[120px]">

                             <ol className="min-w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li className="text-[16px] font-bold"> <h4>Contact Info <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] font-normal"><p>This will be displayed on your profile</p></li>

                           </ol>
                            <ol className="w-[346px] text-[#ABABAB]  text-[16px] h-[56px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]"><h4 className="text-[16px] font-bold">Email Address</h4>
                                    <h4>{userData.email}</h4>
                               </li>
                               <li className="  text-[16px] font-bold flex  items-center gap-[20px]"><h4>Phone Number</h4>
                                   <h4>{userData.phone}</h4>
                                </li>

                           </ol>
                        </div>
 

 <div className="w-[767px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                             <ol className="min-w-[252px]  text-[16px] font-bold  md:h-[60px]  ">
                                <li><h4>Organization Name </h4></li>


                           </ol>
                            <ol className="w-[436px]  text-[16px] h-[56px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center text-[#ABABAB] gap-[20px]"><h4>{userData.orgName}</h4>
                                    
                               </li>
                              

                           </ol>
                        </div>


      <div className=" pb-[20px] border-b-[1px] items-center     gap-[120px] flex  h-[60px] ">

                             <ol className="min-w-[252px] text-[16px] font-bold  md:h-[60px] ">
                                <h4 className="">Bio </h4></ol>
                                

                           
                            <ol className="w-[436px]    text-[16px] ">
                                 <h4> {userData.bio}</h4>
                                    
                              
                              

                           </ol>
                        </div>


                          

                           <div className="min-w-[471px] pb-[20px] border-b-[1px] text-center items-center flex  h-[60px] justify-between gap-[120px]">

                             <ol className="min-w-[252px] flex text-[16px] font-bold">
                                <li className=""> Address/Location  </li>
                                {/* <li className="text-[#F8F9FC] font-normal"><p>This will be displayed on your profile</p></li> */}

                           </ol>
                            <ol className="w-[436px] flex   text-[16px]  ">
                                <li className="">{userData.address}
                                    
                               </li>
                              

                           </ol>
                        </div>




                           <div className="w-[641px] pb-4  border-b-[1px]  flex  h-auto gap-[120px]">

                             <ol className="min-w-[252px] text-[16px] font-bold md:h-[60px] flex  gap-y-[8px]">
                                <li ><h4>Website/Social Media Links </h4></li>
                               

                           </ol>
                            <ol className="w-[269px] text-[#ABABAB]  text-[16px] h-[120px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]">
                                  <h4 className="w-16">Website</h4>    
                                  <h4 className="text-black">{userData.socialLinks.website}</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4 className="w-16" >Twitter</h4>    
                                  <h4 className= "text-black" >{userData.socialLinks.twitter}</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4 className="w-16">Facebook</h4>    
                                  <h4 className= "text-black" >{userData.socialLinks.facebook}</h4>    
                                   </li>
                                <li className="flex items-center gap-[20px]">
                                  <h4 className="w-16">Instagram</h4>    
                                  <h4 className= "text-black" >{userData.socialLinks.instagram}</h4>    
                                   </li>
                                    
                          
                              

                           </ol>
                        </div>
                  </div>
      
  
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

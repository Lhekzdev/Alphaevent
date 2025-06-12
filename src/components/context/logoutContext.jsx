 
 import { createContext } from "react";

 const logoutContext = createContext();

 export const logOutContextProvider =({children})=>{




    
return(
    <logoutContext.Provider>

{children}
    </logoutContext.Provider>
)

 }

 export const useLogoutDislay =()=> useContext(logoutContext)
import { createContext,useState } from "react"; 
import Cookies from 'js-cookie'

const UserContextPro= createContext()
const UserContext=({children})=>{
const details= Cookies.get('foo') && JSON.parse( Cookies.get('foo'));
  //console.log(details)
  const [userDetails, setUserDetails] = useState(details);
  const [isLoggedIn, setisLoggedIn] = useState(false);

    return <UserContextPro.Provider value={{userDetails,setUserDetails,isLoggedIn, setisLoggedIn}}>{children}</UserContextPro.Provider>
}

export {UserContext,UserContextPro}
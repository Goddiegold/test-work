import React,{createContext,useEffect,useReducer} from 'react';
import { toast } from 'react-toastify';
import {decodeUserToken, getUserProfile} from "../services/userService";
export const UserContext  = createContext();


export const USER_TOKEN = "USER_TOKEN";
export const USER_PROFILE="USER_PROFILE"
export const yaarnBoxMaxToken = "yaarnBoxMaxToken";

function userReducer(state,action){
switch(action.type){
    case USER_TOKEN:
        localStorage.setItem(yaarnBoxMaxToken,action.payload)
    return decodeUserToken(action.payload);
    case USER_PROFILE:
    return action.payload;
}
}

function UserContextProvider({children}) {

    //local user info
    const [userTokenDetails,userTokenDetailsDispatch] = useReducer(userReducer,{},function(){
        const token = localStorage.getItem(yaarnBoxMaxToken)
        if(token) return decodeUserToken(token);
        else return null;
    })

    //live user info
    const [user,userDispatch] = useReducer(userReducer,{})


    useEffect(()=>{
const token = localStorage.getItem(yaarnBoxMaxToken)
if(token){
    console.log(token)
    getUserProfile(token,userTokenDetails.accountType).then(res=>{
        console.log(res)
        userDispatch({
            type:USER_PROFILE,
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
        // toast.error(err.response.data)
    })
}
else{
    console.log("No token!")
}
},[userTokenDetails?.token&&userTokenDetails?.token])

 

    return (
       <UserContext.Provider value={{userTokenDetails,userTokenDetailsDispatch,user,userDispatch}}>
{children}
       </UserContext.Provider>
    );
}

export default UserContextProvider;
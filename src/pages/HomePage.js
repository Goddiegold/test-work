import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import {useDispatch} from "react-redux"
import {setIdentity, setIsRoomHost} from "../store/meeting"

const HomePage = () => {
    const {userTokenDetails} = useContext(UserContext)
    const dispatch = useDispatch()
const navigate = useNavigate()
    function navigateUser(){
if(userTokenDetails?.accountType==="client"){
    dispatch(setIsRoomHost(true))
    dispatch(setIdentity("Godwin"))
    return navigate("/meeting?host=true")
}else{
    dispatch(setIsRoomHost(false))
    dispatch(setIdentity("Kelvin"))
    return navigate("/join-meeting")
}
    }
    return (  
        <button onClick={()=>navigateUser()}>{userTokenDetails?.accountType==="client"?"Create room":"Join Room"}</button>
    );
}
 
export default HomePage;
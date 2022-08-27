import React,{createContext, useContext, useReducer} from "react"
export const MeetingContext = createContext();

const initialState={
    identity: "",
    isRoomHost: false,
    connectOnlyWithAudio: false,
    roomId: null,
    showOverlay: true,
    participants: [],
    messages: [],
    activeConversation: null,
    directChatHistory: [],
    socketId: null
}

export const meetActions = Object.freeze({
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_IDENTITY: "SET_IDENTITY",
    SET_ROOM_ID: "SET_ROOM_ID",
    SET_SHOW_OVERLAY: "SET_SHOW_OVERLAY",
    SET_PARTICIPANTS: "SET_PARTICIPANTS",
    SET_MESSAGES: "SET_MESSAGES",
    SET_ACTIVE_CONVERSATION: 'SET_ACTIVE_CONVERSATION',
    SET_DIRECT_CHAT_HISTORY: 'SET_DIRECT_CHAT_HISTORY',
    SET_SOCKET_ID: 'SET_SOCKET_ID',
})

function meetReducer(state,action){
switch(action.type){
case meetActions.SET_IS_ROOM_HOST:
    return{
        ...state,
        isRoomHost:action.payload
    }
case meetActions.SET_PARTICIPANTS:
    const participants = [...state.participants,action.payload]
    return {
        ...state,
        participants
    }
case meetActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
}
}



function MeetContextProvider({children}) {
    const [meet,meetDispatch] = useReducer(meetReducer,initialState);
    return (
        <MeetingContext.Provider value={{meet,meetDispatch}}>
            {children}
        </MeetingContext.Provider>
    );
}

export default MeetContextProvider;



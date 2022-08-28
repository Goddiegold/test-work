export const Actions = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_IDENTITY: "SET_IDENTITY",
    SET_ROOM_ID: "SET_ROOM_ID",
    SET_SHOW_OVERLAY: "SET_SHOW_OVERLAY",
    SET_PARTICIPANTS: "SET_PARTICIPANTS",
    SET_MESSAGES: "SET_MESSAGES",
    SET_ACTIVE_CONVERSATION: 'SET_ACTIVE_CONVERSATION',
    SET_DIRECT_CHAT_HISTORY: 'SET_DIRECT_CHAT_HISTORY',
    SET_SOCKET_ID: 'SET_SOCKET_ID'
  };
  
  export const setIsRoomHost = (isRoomHost) => {
    return {
      type: Actions.SET_IS_ROOM_HOST,
      isRoomHost,
    };
  };
  
  export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
      type: Actions.SET_CONNECT_ONLY_WITH_AUDIO,
      onlyWithAudio,
    };
  };
  
  export const setIdentity = (identity) => {
    return {
      type: Actions.SET_IDENTITY,
      identity,
    };
  };
  
  export const setRoomId = (roomId) => {
    return {
      type: Actions.SET_ROOM_ID,
      roomId,
    };
  };
  
  export const setShowOverlay = (showOverlay) => {
    return {
      type: Actions.SET_SHOW_OVERLAY,
      showOverlay,
    };
  };
  
  export const setParticipants = (participants) => {
    return {
      type: Actions.SET_PARTICIPANTS,
      participants,
    };
  };
  
  export const setMessages = (messages) => {
    return {
      type: Actions.SET_MESSAGES,
      messages,
    };
  };
  
  export const setActiveConversation = (activeConversation) => {
    return {
      type: Actions.SET_ACTIVE_CONVERSATION,
      activeConversation
    }
  }
  
  export const setDirectChatHistory = (directChatHistory) => {
    return {
      type: Actions.SET_DIRECT_CHAT_HISTORY,
      directChatHistory
    }
  }
  
  export const setSocketId = (socketId) => {
    return {
      type: Actions.SET_SOCKET_ID,
      socketId
    }
  }
  
  

const initState = {
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
};

export const meetingReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
    case Actions.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
    case Actions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case Actions.SET_ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.activeConversation
      }
    case Actions.SET_DIRECT_CHAT_HISTORY:
      return {
        ...state,
        directChatHistory: action.directChatHistory
      };
    case Actions.SET_SOCKET_ID:
      return {
        ...state,
        socketId: action.socketId
      }
    default:
      return state;
  }
};


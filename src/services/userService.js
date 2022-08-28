import http from "./httpService";
import jwtDecode from "jwt-decode";

function headers(token){
    return{headers:{"auth-token":token}}
}

export async function register(user){
    return await http.post("/users/signup",user)
}


export async function login(user){
    return await http.post("/users/login",user)
}

export async function registerClient(details,token){
return await http.post("/users/clients/signup",details,headers(token))
}

export async function registerParticipant(details,token){
    return await http.post("/users/participants/signup",details,headers(token))
    }

export async function verifyAccount(code){
    return await http.get(`/users/verify-account/${code}`)
}
    
export async function getUserProfile(token,accountType){
    const userType = accountType==="client"?"clients":accountType==="participants"?"participants":"new"
    return await http.get(`/users/${userType}/profile`,headers(token))
}

export async function getAllProjects(token){
    return await http.get(`/users/clients/all-projects`, headers(token))
}

export async function createNewProject(data, token){
    return await http.post(`/users/clients/new-project`, data, headers(token))
}

export async function editProject(data, token, projectId) {
    return await http.put(`/users/clients/edit-project/${projectId}`, data, headers(token))
}

export async function createNewTrivia(data, token, projectId){
    return await http.post(`/users/clients/project-trivia/${projectId}`, data, headers(token))
}

export async function createNewPoll(data, token, projectId){
    return await http.post(`/users/clients/project-poll/${projectId}`, data, headers(token))
}

export const joinRoomMeeting = async (roomId) => await http.get(`/users/participants/join-room/${roomId}`)

export const getTURNCredentials = async () => {
    return await http.get(`/get-turn-credentials`);
  };
    export function decodeUserToken(token){
        try{
            if(token) return {...jwtDecode(token),token}
            else return null;
          }
          catch(ex){
            console.log(ex)
          }
          }

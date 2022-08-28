import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/Login";
import Onboarding from "./pages/onboarding/onboarding";
import Dashboard from "./pages/dashboard/dashboard";
import AccountSetup from "./pages/account_setup/account_setup";
import EmailVerify from "./pages/email_verification/email_verification";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { getUserProfile } from "./services/userService";
import { UserContext, yaarnBoxMaxToken, USER_PROFILE } from "./context/UserContext";
import WorkspaceSetup from "./pages/workspace_setup/workspace_setup";
import { ProjectsContextProvider } from "./context/ProjectsContext";
import VideoConferencing from "./pages/dashboard/videoConferencing/VC";
import MeetContextProvider, { MeetingContext } from "./context/MeetContext";
import { connectWithSocketIOServer } from "./utils/wss";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(()=>{
connectWithSocketIOServer()
  },[])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard/*" element={
          <ProjectsContextProvider>
            <Dashboard />
          </ProjectsContextProvider>
        } />
        <Route path="/account_setup" element={<AccountSetup />} />
        <Route path="/verify-account" element={<EmailVerify />}>
          <Route path=":verificationCode" element={<EmailVerify />} />
        </Route>
        <Route path="/email" element={<EmailVerify />} />
        <Route path="/workspace_setup" element={<WorkspaceSetup />} />
        <Route path="/meeting" element={
            <VideoConferencing />
        } />
        <Route path="/join-meeting" element={<VideoConferencing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

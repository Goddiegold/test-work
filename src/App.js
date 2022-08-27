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
import MeetContextProvider from "./context/MeetContext";

function App() {
  // const {userDispatch,userTokenDetails} = useContext(UserContext)
  // useEffect(()=>{
  // getUserProfile(userTokenDetails.token,userTokenDetails.accountType).then(res=>{
  //   console.log(res)
  //   userDispatch({
  //         type:USER_PROFILE,
  //       payload:res.data
  //             })
  // }).catch(err=>{
  //   toast.error(err.response.data)
  // })

  // },[])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
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
        <Route path="/meeting/:meetId" element={
            <VideoConferencing />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

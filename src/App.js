import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Onboarding from "./pages/onboarding/onboarding";
import Dashboard from "./pages/dashboard/dashboard";
import AccountSetup from "./pages/account_setup/account_setup";
import EmailVerify from "./pages/email_verification/email_verification";
import WorkspaceSetup from "./pages/workspace_setup/workspace_setup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/account_setup" element={<AccountSetup />} />
        <Route path="/email" element={<EmailVerify />} />
        <Route path="/workspace_setup" element={<WorkspaceSetup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

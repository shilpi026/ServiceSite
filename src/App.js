import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from './pages/dashboard/Dashboard'

import Profile from "./pages/dashboard/dashboardpages/profile/Profile";
import Joboffer from "./pages/dashboard/dashboardpages/joboffer/Joboffer";
import Managejob from "./pages/dashboard/dashboardpages/managejob/Managejob";
import Candidates from "./pages/dashboard/dashboardpages/candidates/Candidates";
// import New from "./pages/dashboard/dashboardpages/new/New";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/joboffer" element={<Joboffer />} />
        <Route path="/managejob" element={<Managejob />} />
        <Route path="/candidates" element={<Candidates />} />
        {/* <Route path="/users/new" element={<New />} /> */}



      </Routes>
    </>
  );
}

export default App;

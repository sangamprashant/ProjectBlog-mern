import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signiup";
import Upload from "./components/Admin/Upload";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import Profile from "./components/Admin/Profile";
import Resume from "./components/Admin/Resume";
import Setting from "./components/Admin/Setting";
import Quyalification from "./components/Admin/Quyalification";
import SoftSkill from "./components/Admin/SoftSkill";
import Intrest from "./components/Admin/Intrest";
import Social from "./components/Admin/Social";
import SideNav from "./components/SideNav";
function App() {
 const [searched,setSearched]=useState([]);
 const [isSearched,setIsSearched]= useState(false);

  return (
    <BrowserRouter>
    <LoginContext.Provider
        value={{setSearched,setIsSearched}}
      >
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              {isSearched&&<SideNav/>}
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Landing />} />
                <Route path="/:userName" element={<Home/>} />

                <Route path="/admin/profile" element={<Profile />} />
                <Route path="/admin/projects" element={<Projects />} />
                <Route path="/admin/resume" element={<Resume />} />
                <Route path="/admin/qualification" element={<Quyalification />} />
                <Route path="/admin/skill" element={<SoftSkill />} />
                <Route path="/admin/intrest" element={<Intrest />} />
                <Route path="/admin/social" element={<Social />} />
                <Route path="/admin/setting" element={<Setting />} />
                <Route path="/admin/signup" element={<Signup />} />
                <Route path="/admin/signin" element={<Signin />} />

                <Route path="/admin/upload" element={<Upload />} />
              </Routes>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

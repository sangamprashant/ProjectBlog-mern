import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Projects from "./components/Projects";
import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signiup";
import Upload from "./components/Admin/Upload";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import Profile from "./components/Admin/Profile";
import Resume from "./components/Admin/Resume";
import Setting from "./components/Admin/Setting";

import SoftSkill from "./components/Admin/SoftSkill";
import Intrest from "./components/Admin/Intrest";
import Social from "./components/Admin/Social";
import SideNav from "./components/SideNav";
import PublicFooter from "./components/Public/PublicFooter";
import PublicIntrest from "./components/Public/PublicInterst";
import PublicProgressBar from "./components/Public/PublicProgressBar";
import PublicQuyalification from "./components/Public/PublicWorkExperience";
import PublicCertificate from "./components/Public/PublicCertificate";
import PublicProject from "./components/Public/PublicProject";
import PublicResume from "./components/Public/PublicResume";
import PublicSkill from "./components/Public/PublicSkill";
import PublicHead from "./components/Public/PublicHead";
import PublicDescription from "./components/Public/PublicDescription";
import PageNotFound from "./components/PageNatFound";
import TopNav from "./components/TopNav";
function App() {
  const [searched, setSearched] = useState([]);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ setSearched }}>
        <div>
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container ">
              <div className="row">
                <div className="col-lg-3">
                  <div className="d-lg-none">
                    {/* Render PublicHead only on mobile devices */}
                    <PublicHead />
                    <SideNav />
                  </div>
                  <div className="d-none d-lg-block position-fixed">
                    {/* Render PublicHead as fixed on laptops */}
                    <PublicHead />
                    <div style={{ marginTop: "0px" }}>
                      <SideNav />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                <TopNav/>
                  <Routes>
                    <Route   path="/" element={<Landing />} />
                    <Route   path="*" element={<PageNotFound />} />
                    <Route   path="/prashant/profile"   element={<PublicDescription />} />
                    <Route   path="/prashant/progress"   element={<PublicProgressBar screen="big" />} />
                    <Route   path="/prashant/skill" element={<PublicSkill screen="big"/>} />
                    <Route   path="/prashant/qualification"   element={<PublicQuyalification />} />
                    <Route   path="/prashant/projects"   element={<PublicProject />} />
                    <Route   path="/prashant/certificates"   element={<PublicCertificate />} />
                    <Route   path="/prashant/resume" element={<PublicResume status="open"/>} />
                    <Route   path="/prashant/intrest" element={<PublicIntrest />} />
                  </Routes>
                  <PublicFooter />
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

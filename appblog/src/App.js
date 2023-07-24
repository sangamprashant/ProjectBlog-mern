import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";

import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signiup";

import Landing from "./components/Landing";
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
import Header from "./components/Admin/Header";
import Description from "./components/Admin/Description";
import Progress from "./components/Admin/Progress";
import Skills from "./components/Admin/Skills";
import Qualification from "./components/Admin/Qualification";
import Projects from "./components/Admin/Projects";
import Certificate from "./components/Admin/Certificate";
import Resume from "./components/Admin/Resume";
import Setting from "./components/Admin/Setting";
import Intrest from "./components/Admin/Intrest";
import Footer from "./components/Admin/Footer";
function App() {
  const [logged, setLogged] = useState(false);
  const [user,setUser] =useState([]);
  const [footer,setFooter] = useState([]);
  const [footerContent,setFooterContent]=useState("")

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ logged,setLogged,user,setUser }}>
        <div>
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container ">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-lg-none">
                    {/* Render PublicHead only on mobile devices */}
                    <PublicHead user={user} />
                    <SideNav login={logged} footer={footer} setFooter={setFooter}/>
                  </div>
                  <div className="d-none d-lg-block position-fixed col-md-3">
                    {/* Render PublicHead as fixed on laptops */}
                    <PublicHead user={user}/>
                    <div style={{ marginTop: "0px" }}>
                      <SideNav login={logged} footer={footer} setFooter={setFooter}/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                <TopNav login={logged}/>
                  <Routes>
                    <Route   path="/" element={<Landing />} />
                    <Route   path="*" element={<PageNotFound />} />
                    <Route   path="/prashant/profile"   element={<PublicDescription />} />
                    <Route   path="/prashant/progress"   element={<PublicProgressBar screen="big" />} />
                    <Route   path="/prashant/skill" element={<PublicSkill screen="big"/>} />
                    <Route   path="/prashant/qualification"   element={<PublicQuyalification />} />
                    <Route   path="/prashant/projects"   element={<PublicProject />} />
                    <Route   path="/prashant/certificates"   element={<PublicCertificate />} />
                    <Route   path="/prashant/resume" element={<PublicResume status="open" user={user}/>} />
                    <Route   path="/prashant/intrest" element={<PublicIntrest />} />
                    {/* Admin */}
                    <Route   path="/admin/signin" element={<Signin />} />
                    <Route   path="/admin/header" element={<Header user={user} setUser={setUser}/>} />
                    <Route   path="/admin/description" element={<Description/>} />
                    <Route   path="/admin/progress"   element={<Progress screen="big" />} />
                    <Route   path="/admin/skill" element={<Skills screen="big"/>} />
                    <Route   path="/admin/qualification" element={<Qualification screen="big"/>} />
                    <Route   path="/admin/projects"   element={<Projects />} />
                    <Route   path="/admin/certificates"   element={<Certificate />} />
                    <Route   path="/admin/resume"   element={<Resume user={user} />} />
                    <Route   path="/admin/setting"   element={<Setting />} />
                    <Route   path="/admin/intrest"   element={<Intrest />} />
                    <Route   path="/admin/footer"   element={<Footer footer={footer} setFooter={setFooter} footerContent={footerContent} setFooterContent={setFooterContent} user={user} />} />
                  </Routes>
                  <PublicFooter footer={footer} setFooter={setFooter} footerContent={footerContent} setFooterContent={setFooterContent} user={user}/>
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

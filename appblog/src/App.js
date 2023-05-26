import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
function App() {
  const [SearchedUser,setSearchedUser]=useState();
  const [LoggedUser,setLoggedUser]=useState();

  useEffect(() => {
    const searchedUserFromStorage = localStorage.getItem("SearchedUser");
    const parsedSearchedUser = !searchedUserFromStorage ? null:JSON.parse(searchedUserFromStorage);
    setSearchedUser(parsedSearchedUser);
    
    const userFromStorage = localStorage.getItem("user");
    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : null;
    setLoggedUser(parsedUser);
  }, []);
  
  const LoggedUserORSearchedUser=()=>{
    if (LoggedUser){
      return(<>
        <li>
                      <Link to="/admin/profile">
                        <span className="fa fa-user"></span> Profile
                      </Link>
                    </li>
                    
                    <li >
                      <Link to="/admin/projects">
                        <span className="fa fa-credit-card"></span> Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/qualification">
                        <span className="fa fa-graduation-cap"></span> Qualification
                      </Link>
                      </li>
                      <li>
                      <Link to="/admin/skill">
                        <span className="fa fa-code"></span> Programming Skill
                      </Link>
                   
                    </li>
                    <li>
                      <Link to="/admin/intrest">
                        <span className="fa fa-code"></span> Intrest
                      </Link>
                   
                    </li>
                    <li>
                      <Link to="/admin/resume">
                        <span className="fa fa-file-text "></span> Resume
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/social">
                        <span className="fa fa-file-text "></span> Social
                      </Link>
                    </li>
                    <li>
                    <Link to="/admin/setting">
                        <span className="fa fa-cog"></span> Settings
                        </Link>
                    </li>

       </> )
    }
  }


  return (
    <BrowserRouter>
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <img
                    className="img-profile img-circle img-responsive center-block"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      {SearchedUser?SearchedUser.name:LoggedUser?LoggedUser.name:"Please Login or search"} <br />
                      <label className="label label-info">{SearchedUser?SearchedUser.userName:LoggedUser?LoggedUser.userName:"Please Login or search"}</label>
                    </li>

                    <li className="activity">{SearchedUser?SearchedUser.email:LoggedUser?LoggedUser.email:"Please Login or search"}</li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    {LoggedUserORSearchedUser()}
                  </ul>
                </nav>
              </div>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:userName" element={<Home  setSearchedUser={setSearchedUser}/>} />

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
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signiup";
import Upload from "./components/Admin/Upload";
import Landing from "./components/Landing";
function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <div class="view-account">
          <section class="module">
            <div class="module-inner">
              <div class="side-bar">
                <div class="user-info">
                  <img
                    class="img-profile img-circle img-responsive center-block"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                  <ul class="meta list list-unstyled">
                    <li class="name">
                      Prashant Srivastav <br />
                      <label class="label label-info">UX Designer</label>
                    </li>

                    <li class="activity">Last logged in: Today at 2:18pm</li>
                  </ul>
                </div>
                <nav class="side-menu">
                  <ul class="nav">
                    <li>
                      <a href="#">
                        <span class="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-cog"></span> Settings
                      </a>
                    </li>
                    <li class="active">
                      <a href="#">
                        <span class="fa fa-credit-card"></span> Billing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-envelope"></span> Messages
                      </a>
                    </li>

                    <li>
                      <a href="user-drive.html">
                        <span class="fa fa-th"></span> Drive
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-clock-o"></span> Reminders
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:userName" element={<Home />} />

                <Route path="/admin/home" element={<Admin />} />
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

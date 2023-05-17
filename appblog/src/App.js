import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Admin from "./components/Admin";
import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signiup";
import Upload from "./components/Admin/Upload";
import Landing from "./components/Landing";
function App() {
  return (
<BrowserRouter>
<Navbar/>
  <Routes>
  <Route path='/' element={<Landing/>}/>
    <Route path='/:userName' element={<Home/>}/>
   
    <Route path='/admin/home' element={<Admin/>}/>
    <Route path='/admin/signup' element={<Signup/>}/>
    <Route path='/admin/signin' element={<Signin/>}/>
    <Route path='/admin/upload' element={<Upload/>}/>
  </Routes>
  <ToastContainer theme="dark" />
</BrowserRouter>
  );
}

export default App;

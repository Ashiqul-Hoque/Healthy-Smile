import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import ErrorPage from "./Components/404Page/ErrorPage";
import AboutMe from "./Components/About Me/AboutMe";
import Blog from "./Components/Blog/Blog";
import CheckOut from "./Components/CheckOut/CheckOut";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>

        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Forum from "./Component/Forum/Forum";
import Login from "./Component/Login/Login";
import Prestigious from "./Component/Prestigious/Prestigious";
import QuestionBox from "./Component/QuestionBox/QuestionBox";
import SignUp from "./Component/SignUp/SignUp";
import AboutUs from "./Page/AboutUs/AboutUs";
import ContactUs from "./Page/ContactUs/ContactUs";
import DashBoard from "./Page/DashBoard/DashBoard";
import Home from "./Page/Home/Home";
import Footer from "./Share/Footer/Footer";
import Header from "./Share/Header/Header";
import Review from "./Share/Review/Review";


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/questionBox" element={<QuestionBox></QuestionBox>}></Route>
     <Route path="/prestigious" element={<Prestigious></Prestigious>}></Route>
     <Route path="/community" element={<Review></Review>}></Route>
     <Route path="/about" element={<AboutUs></AboutUs>}></Route>
     <Route path="/forum" element={<Forum></Forum>}></Route>
     <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<SignUp></SignUp>}></Route>
     <Route path="/dash" element={<DashBoard></DashBoard>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

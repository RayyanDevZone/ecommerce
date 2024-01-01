import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "../Pages/Design/Design";
import Blog from "../Pages/Blog/Blog";
import Navbar from "../Component/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Addtocart/Cart";
import Wishlist from "../Pages/Yourwishlist/Wishlist";
import Footer from "../Component/Footer/Footer";
import Copyright from "../Component/Copyright/Copyright";
import Account from "../Pages/Account/Account";
import MobileCovers from "../Pages/MobileCovers/MobileCovers";
import Keychains from "../Pages/Keychains/Keychains";
import VectorArt from "../Pages/VectorArt/VectorArt";
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'
import SignUp from '../Pages/SignUp/SignUp'
import ResetPassword from "../Pages/ForgotPassword/ResetPassword";
import AddProducts from "../Pages/AddProducts/AddProducts";
import BuyNow from "../Pages/BuyNow/BuyNow";
import OrderNow from "../Pages/OrderNow/OrderNow";
import UserDetail from "../Pages/UserDetail/UserDetail";
import Payment from "../Pages/Payment/Payment";
const Routing = () => {
  return (
    <div className="Main_Routing">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/mobile-covers" element={<MobileCovers />} />
          <Route path="/keychains" element={<Keychains />} />
          <Route path="/vector-art" element={<VectorArt />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/add-products" element={<AddProducts/>}/>
          <Route path="/buy-now" element={<BuyNow/>}/>
          <Route path="/order-now" element={<OrderNow/>}/>
          <Route path="/userdetails" element={<UserDetail/>}/>
          <Route path="/payment" element={<Payment/>}/>
          
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
};

export default Routing;

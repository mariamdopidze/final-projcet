import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";
import User from "./components/User";
import Discount from "./components/Discount";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import { Swiper, SwiperSlide } from 'swiper/react'
import Listing from "./pages/Listing";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import Successful from "./pages/Successful";
import Failedorder from "./pages/Failedorder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Password from "./pages/Password";
import Resetpassword from "./pages/Resetpassword";
import Order from "./pages/Order";
import Wishlist from "./pages/Wishlist";




function App() {
  return (
    <Provider store={store}>
      <div>
       
       <Routes>
          <Route path="/product" element={<ProductList/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/listing" element={<Listing/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/successful" element={<Successful/>}/>
          <Route path="/failedorder" element={<Failedorder/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/password" element={<Password/>}/>
          <Route path="/reset" element={<Resetpassword/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
         

        </Routes>
      </div>
    </Provider>
  );
}


export default App;

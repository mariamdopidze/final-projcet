import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";
import User from "./components/User";
import Discount from "./components/Discount";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
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
import Shipping from "./pages/Shipping";
import Account from "./pages/Account";
import Changepassword from "./pages/Changepassword";
import Emptystate from "./pages/Emptystate";
import Loginpage from "./pages/Loginpage";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Addproduct from "./pages/Addproduct";
import Adminorder from "./pages/Adminorder";
import Setting from "./pages/Setting";
import Reviews from "./pages/Reviews";
import Customers from "./pages/Customers";
import About from "./pages/About";
import Productreview from "./pages/Productreview";




function App() {
  return (
    <Provider store={store}>
      <div>
       
       <Routes>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/listing" element={<Listing/>}/>
          <Route path="/listing/:category" element={<Listing/>}/>
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
          <Route path="/shipping" element={<Shipping/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/changepassword" element={<Changepassword/>}/>
          <Route path="/empty" element={<Emptystate/>}/>
          <Route path="/loginpage" element={<Loginpage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/addproduct" element={<Addproduct/>}/>
          <Route path="/adminorder" element={<Adminorder/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/productreview" element={<Productreview/>}/>

        </Routes>
      </div>
    </Provider>
  );
}


export default App;

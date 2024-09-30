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

function App() {
  return (
    <Provider store={store}>
      <div>
       
       <Routes>
          <Route path="/product" element={<ProductList/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/listing" element={<Listing/>}/>

        </Routes>
      </div>
    </Provider>
  );
}

export default App;

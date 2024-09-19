import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from 'react-router-dom';
import Counter from './pages/Counter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import User from './components/User';



function App() {
  
  return (
    <Provider store={store}>
    <div>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/input' element={<User/>} />
      </Routes>
      
       
    </div>

    </Provider>
  );
}

export default App;

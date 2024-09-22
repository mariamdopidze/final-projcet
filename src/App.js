import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { store } from './store/store';
import { Provider } from 'react-redux';
import User from './components/User';
import Discount from './components/Discount'
import Main from './components/Main';




function App() {
  
  return (
    <Provider store={store}>
    <div>
      <Discount/>
      <Header/>
      <Main/>

      <Routes>
       
        
      </Routes>
      
       
    </div>

    </Provider>
  );
}

export default App;

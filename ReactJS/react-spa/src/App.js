import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes, Route, Outlet, Link, BrowserRouter} from  "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

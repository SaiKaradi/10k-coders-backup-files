import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter,Route,Routes,} from 'react-router-dom'





import Users from "./component/Users";
import Layout from "./component/Layout";
import EditUser from "./component/EditUser";
import CreateUser from "./component/CreateUser";
import Deleteuser from "./component/DeleteUser";
import Navbar from "./component/Navbar";
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Users/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path="/delete/:id" element={<Deleteuser/>}/>
          <Route path="/create" element={<CreateUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

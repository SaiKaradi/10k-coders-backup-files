import React,{usestate} from 'react';
import './App.css';

import Main from './components/Main';
import { MyContextProvider } from './components/MyContext';

function App() {
  const [users,setUsers]=usestate(["sai","kumar","reddy","karadi"])
  return (
    <div className="App">
      <MyContextProvider>
      <Main  allUsers={users}/>

      </MyContextProvider>
    
    </div>
  );
}

export default App;

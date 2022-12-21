import logo from './logo.svg';
import './App.css';
import Employee from './react-functional-components/Employee';
import { Person } from './react-functional-components/Person';
import { Users } from './react-functional-components/Users';


function App() {
  return (
    <div className="App">
    <Employee/> 
    <Person/>
    <Users/>
     


    </div>
  );
}

export default App;

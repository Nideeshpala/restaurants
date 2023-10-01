import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Single from './Single';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='single/:id' element={<Single></Single>}></Route>
       
       </Routes>
      
    </div>
  );
}

export default App;

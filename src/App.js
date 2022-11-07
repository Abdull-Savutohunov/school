import {Route, Routes} from 'react-router-dom';
// import AuthProvider from './pages/Auth';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';
import ClassMore from "./component/ClassMore";
import HomeClassMore from "./component/HomeClassMore";
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/class/:id' element={< ClassMore/>}/>
      <Route path='/home/class/:id' element={< HomeClassMore />}/>



    </Routes>
  );
}

export default App;

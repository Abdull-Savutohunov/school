import {Route, Routes} from 'react-router-dom';
// import AuthProvider from './pages/Auth';
import Home from './pages/Home';
import Register from './pages/apps/register/Register';
import Admin from './pages/Admin';
import ClassMore from "./component/ClassMore";
import HomeClassMore from "./component/HomeClassMore";
import './App.scss'
import HomeClass from './component/HomeClass';
import Auth from "./pages/apps/auth/Auth";
import PrivateRoutes from "./component/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/admin' element={<Admin/>}/>

      <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<HomeClass/>}/>
        <Route path='/class/:id' element={< ClassMore/>}/>
        <Route path='/home/class/:id' element={< HomeClassMore />}/>
      </Route>

    </Routes>
  );
}

export default App;

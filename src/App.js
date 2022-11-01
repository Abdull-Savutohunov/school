
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './pages/Auth';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/auth' element={ <AuthProvider />} />
      <Route path='/ragister' element={ <Register />} />
      <Route path='/admin' element={ <Admin />} />



    </Routes>
  );
}

export default App;

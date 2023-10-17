import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/styles/index.css';
import './assets/styles/fonts.css';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Pricing from './pages/pricing/Pricing';
import Success from './pages/pricing/Success';
import Categories from './pages/categories/Categories';
import CategoryDetail from './pages/categories/CategoryDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Homepage />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='success' element={<Success />} />
        <Route path='categories'>
          <Route path='' element={<Categories />} />
          <Route path=':id' element={<CategoryDetail />} />
        </Route>
        <Route path='*' element={<Navigate to={'home'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Pricing from './pages/pricing/Pricing';
import Success from './pages/pricing/Success';
import Categories from './pages/categories/Categories';
import CategoryDetail from './pages/categories/CategoryDetail';
import ProductDetail from './pages/product/ProductDetail';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path='product/:id' element={<ProductDetail />} />
          <Route path='*' element={<Navigate to={'home'} replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

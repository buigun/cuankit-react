import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/styles/index.css';
import './assets/styles/fonts.css';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/authentication/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Homepage />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Navigate to={'home'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

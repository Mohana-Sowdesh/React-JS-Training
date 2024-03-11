import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import CategoryProducts from './pages/CategoryProducts/CategoryProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:category" element={<CategoryProducts />} />
    </Routes>
);
}

export default App;

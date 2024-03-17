import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import CategoryProducts from './pages/CategoryProducts/CategoryProducts';
import Order from './pages/Order/Order';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:category" element={<CategoryProducts />} />
      <Route path="/order" element={<Order />} />
    </Routes>
);
}

export default App;

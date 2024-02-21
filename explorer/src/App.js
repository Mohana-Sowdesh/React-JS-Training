import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import SpecificDestination from './pages/SpecificDestination/SpecificDestination';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/place" element={<SpecificDestination />}></Route>
    </Routes>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Beauty from './pages/Beauty'
import Living from './pages/Living'
import Details from './pages/Details'
import Cart from './pages/Cart';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="living" element={<Living />} />
        <Route path="details" element={<Details />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

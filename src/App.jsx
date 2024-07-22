import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import CreateOrder from './pages/CreateOrder';
import Order from './pages/Order';
import AppLayout from './Ui/AppLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/" element={<AppLayout />}>
            <Route path="/menu" element={<Menu />} />,
          </Route>
          <Route path="/cart" element={<Cart />} />,
          <Route path="/create/order" element={<CreateOrder />} />,
          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;

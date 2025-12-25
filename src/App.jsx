import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Shop from './Shop';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router basename="ApolloG01">
      <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

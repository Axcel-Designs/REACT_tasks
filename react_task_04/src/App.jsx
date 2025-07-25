import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import WishList from "./pages/WishList";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "../public/style.css";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Account />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="details" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

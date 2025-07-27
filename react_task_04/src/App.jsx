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
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./redux/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <main className="max-md:px-2 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="notfound" element={<NotFound />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route
            path="details/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<LogIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

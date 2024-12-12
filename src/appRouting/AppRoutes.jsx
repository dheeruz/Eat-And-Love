import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import {
  About,
  Homepage,
  Contact,
  Checkout,
  SingleProduct,
  Shop,
  Login,
  Signup,
  Dashboard,
} from "../pages";
import { Footer, Header } from "../components";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without Header and Footer */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Routes with Header and Footer */}
        <Route element={<LayoutWithHeaderFooter />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LayoutWithHeaderFooter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import ScrollEffects from "./components/ScrollEffects";



export default function App() {
  return (
    <>

      <ScrollEffects />   
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about-us" element={<AboutUs />} />    
<Route path="/products" element={<Products />} />      
  <Route path="/infrastructure" element={<div className="p-8">Infrastructure</div>} />
<Route path="/contact-us" element={<ContactUs />} />   
   </Routes>

       <Footer />
    </>
  );
}
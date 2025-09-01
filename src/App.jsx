import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Home from "./pages/Home/Home";
import About from "../src/pages/Aboutus/Aboutus"
import Blog from "../src/pages/Blog/Blog"
import Contact from '../src/pages/Contact/Contact'
import Blogs from "./pages/Blog/Blogs/Blogs";
import Login from "./pages/Login/Login";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import DetailsShow from "./pages/DetailsShow/detailsShow";
import BlogShow from "./pages/BlogShow/blogShow";
import BlogsSection from "./pages/BlogsSection/BlogsSection"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<LoadingScreen />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<Blogs />} />
      <Route path="/adminLogin" element={<Login />} />
      <Route path="/Admin-panel" element={<AdminPanel />} />
      <Route path="/Show-Details" element={<DetailsShow />} />
      {/* <Route path="/blog-Add" element={<Blogs />} /> */}
      <Route path="/blog-show" element={<BlogShow />} />
      <Route path="/blogs-section" element={<BlogsSection />} />
    </Routes>
  );
}

export default App;

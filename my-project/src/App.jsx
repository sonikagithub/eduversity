import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import About from "./components/AboutUs/About";
import Layout from "./components/Layout";
import CompairCollage from "./components/CompairCollage/CompairCollage";
import BlogListing from "./components/Blog/BlogListing";
import Blog from "./components/Home/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/about" element={<About />} />
          <Route path="/compaircollage" element={<CompairCollage />} />
        
        <Route path="/blog" element={<Blog />} />
<Route path="/blog/:id" element={<BlogDetails />} />
<Route path="/bloglisting" element={<BlogListing />} />
<Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

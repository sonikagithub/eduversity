import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import About from "./components/AboutUs/About"
import Layout from "./components/Layout";
import CompairCollage from "./components/CompairCollage/CompairCollage";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/about" element={<About />} />
           <Route path="/compaircollage" element={<CompairCollage />} />
           <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

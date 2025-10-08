import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import About from "./components/AboutUs/About"
import Layout from "./components/Layout";
import CompairCollage from "./components/CompairCollage/CompairCollage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/about" element={<About />} />
           <Route path="/compaircollage" element={<CompairCollage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

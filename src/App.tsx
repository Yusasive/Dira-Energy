import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from './ScrollToTop';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Services } from "./pages";
import AboutUs from "./components/AboutUs";
import What from "./components/Doings";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<What />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

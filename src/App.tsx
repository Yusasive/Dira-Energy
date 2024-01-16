import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from './ScrollToTop';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Services } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

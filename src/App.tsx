import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/Footer";
import Education from "./components/education/Education";
import Leisure from "./components/leisure/Leisure";
// import Commercial from "./components/Commercial";
import Retail from "./components/retail/Retail";
import Lighthouse from "./components/case-study/Lighthouse";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/education" element={<Education />} />
        <Route path="/leisure" element={<Leisure />} />
        <Route path="/retail" element={<Retail />} />
          <Route path="/case-studies" element={<Lighthouse />} />
      </Routes>
       <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

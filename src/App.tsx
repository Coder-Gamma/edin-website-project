import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/Footer";
import Education from "./components/education/Education";
import Leisure from "./components/leisure/Leisure";
// import Commercial from "./components/Commercial";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/education" element={<Education />} />
        <Route path="/leisure" element={<Leisure />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

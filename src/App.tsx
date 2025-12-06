import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article2 from "./components/home/Article2";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/Footer";
import Education from "./components/education/Education";
// import Commercial from "./components/Commercial";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/education" element={<Education />} />
        <Route path="/" element={<Article2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

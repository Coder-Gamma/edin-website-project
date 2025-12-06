import Navbar from "./components/Navbar";
import Logosandpartners from "./components/home/Logosandpartners";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article2 from "./components/home/Article2";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/Footer";
// import Commercial from "./components/Commercial";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/" element={<Logosandpartners />} />
        <Route path="/" element={<Article2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

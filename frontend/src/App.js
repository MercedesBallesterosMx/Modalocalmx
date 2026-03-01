import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Mision from "./pages/Mision";
import Vision from "./pages/Vision";
import Politicas from "./pages/Politicas";
import Ubicacion from "./pages/Ubicacion";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";
import Place from "./pages/Place/Place.jsx";
import VoicePage from '@/pages/voice-recognition/VoicePage';
import TextPage from './pages/voice-recognition/TextPage';
import Roulette from "@/pages/roulette/roulette";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/place" element={<Place />} />
        <Route path="/test" element={<TestPage />} /> 
        <Route path="/voice-recognition" element={<VoicePage />} />    
        <Route path="/text" element={<TextPage />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";
import VoicePage from '@/pages/voice-recognition/VoicePage';
import TextPage from './pages/voice-recognition/TextPage';
import Randing from "@/pages/Randing/Randing";
import IT from "@/pages/IT/IT";
import Roulette from "@/pages/Roulette/Roulette";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} /> 
        <Route path="/voice-recognition" element={<VoicePage />} />    
        <Route path="/text" element={<TextPage />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/Randing" element={ <Randing />} />
        <Route path="/IT" element={<IT />} />
      </Routes>
    </>
  );
}

export default App;

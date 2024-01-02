import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";
import VoicePage from '@/pages/voice-recognition/VoicePage';
import TextPage from './pages/voice-recognition/TextPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} /> 
        <Route path="/voice-recognition" element={<VoicePage />} />    
        <Route path="/text" element={<TextPage />} />
      </Routes>
    </>
  );
}

export default App;

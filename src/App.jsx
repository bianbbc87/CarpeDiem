import { Route, Routes } from "react-router-dom";
// import TestPage from "@/TestPage.jsx";

import Place from "./pages/Place/Place.jsx";
import VoicePage from "@/pages/voice-recognition/VoicePage";
import TextPage from "./pages/voice-recognition/TextPage";
import Roulette from "@/pages/roulette/roulette";
// import Test from "@/pages/test/test.jsx";
import Home from "@/pages/Home/Home";
import Randing from "@/pages/Randing/Randing";
import IT from "@/pages/IT/IT";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<TestPage />} /> */}
        <Route path="/place" element={<Place />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/voice-recognition" element={<VoicePage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/" element={<Home />} />
        <Route path="/Randing" element={<Randing />} />
        <Route path="/IT" element={<IT />} />
      </Routes>
    </>
  );
}

export default App;

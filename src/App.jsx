import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";
import Roulette from "@/components/test/roulette/roulette";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </>
  );
}

export default App;

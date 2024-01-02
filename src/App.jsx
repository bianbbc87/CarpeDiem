import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";
import Place from "./pages/Place/Place.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </>
  );
}

export default App;

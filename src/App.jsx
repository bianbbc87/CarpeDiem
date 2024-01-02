import { Route, Routes } from "react-router-dom";
import TestPage from "@/TestPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:watch_id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Controlled vs uncontrolled

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeanMap from "./components/BeanMap/BeanMap";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeanMap />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

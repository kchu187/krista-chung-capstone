import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SignInPage from "./Pages/SignInPage/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/beanmap" element={<HomePage />} />
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

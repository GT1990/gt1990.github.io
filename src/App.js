import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

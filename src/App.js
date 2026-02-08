import './App.css';
import Log from "./components/login";
import Home from "./components/home";
import Rose from "./components/rose/rose";
import Propose from "./components/propose/propose";
import Chocolate from "./components/chocolate/chocolate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lay from "./lay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/" element={<Lay />}>
            <Route index element={<Home />} />
            <Route path="/rose" element={<Rose />} />
            <Route path="/propose" element={<Propose />} />
            <Route path="/choco" element={<Chocolate />} />
            
            {/* <Route path="/prof" element={<Prof />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

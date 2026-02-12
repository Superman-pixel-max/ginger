import './App.css';
import Log from "./components/login";
import Home from "./components/home";
import Rose from "./components/rose/rose";
import Propose from "./components/propose/propose";
import Chocolate from "./components/chocolate/chocolate";
import Promise from "./components/promise/promise";
import Teddy from "./components/teddy/teddy";
import Hug from "./components/hug/hug";
import Kiss from "./components/kiss/kiss";
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
            <Route path="/teddy" element={<Teddy />} />
            <Route path="/promise" element={<Promise />} />
            <Route path="/hug" element={<Hug />} />
            <Route path="/kiss" element={<Kiss />} />
            
            {/* <Route path="/prof" element={<Prof />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

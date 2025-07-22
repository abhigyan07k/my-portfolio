import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login  from "./pages/login/Login";
import Signup  from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

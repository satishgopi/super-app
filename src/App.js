import "./App.css";
import Register from "./pages/register/Register";
import SelectCategory from "./pages/category/Select-category";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Browse from "./pages/Browse/Browse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<SelectCategory />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;

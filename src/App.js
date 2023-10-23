import "./App.css";
import Register from "./pages/register/Register";
import SelectCategory from "./pages/category/Select-category";
import { Routes, Route } from "react-router-dom";
import Browse from "./pages/browse/browse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<SelectCategory />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;

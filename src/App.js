import "./App.css";
import Register from "./pages/register/Register";
import SelectCategory from "./pages/category/select-category";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<SelectCategory />} />
      </Routes>
    </div>
  );
}

export default App;

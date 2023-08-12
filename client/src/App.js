import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/add-recipes" element={<AddRecipes />}></Route>
            <Route exact path="/my-recipes" element={<MyRecipes />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

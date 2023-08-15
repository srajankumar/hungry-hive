import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Login } from "./pages/Login";
import { Authori } from "./pages/Authori";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/auth" element={<Authori/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/my-recipes" element={<MyRecipes />}></Route>
            <Route exact path="/add-recipes" element={<AddRecipes />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

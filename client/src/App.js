import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Cred } from "./pages/Cred";
import { Login } from "./pages/Login";


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cred" element={<Cred/>}></Route>
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

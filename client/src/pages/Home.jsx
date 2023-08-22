// import Background from "../components/Background";
import Hero from "../components/Home/Hero";
import Search from "../components/Home/Search";
// import Toast from "../components/Home/Toast";
import Cards from "../components/allRecipes";
// import { useEffect, useState } from "react";
// import axios from "axios";
function Home() {
  // const [recipe,setRecipes]=useState([])
  // useEffect(()=>{
  //   const fetchRecipe = async ()=>{
  //     try{
  //      const response= await axios.get("http://localhost:3001/recipes")
  //      setRecipes(response.data)
  //      console.log(response.data)
  //     }catch(err){
  //       console.error(err)
  //     }
  //   }
  //   fetchRecipe()
  // },[])
  return (
    <div>
      <Hero />
      <Search />
      {/* Body */}
      <div className="bg-black">
        {/* <Background /> */}
        <Cards />
      </div>
      {/* <Toast /> */}
    </div>
  );
}

export default Home;

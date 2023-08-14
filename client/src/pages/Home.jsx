import Background from "../components/Background";
import Hero from "../components/Home/Hero";
import Search from "../components/Home/Search";
import Toast from "../components/Home/Toast";
import Cards from "../components/allRecipes";

function Home() {
  return (
    <div>
      <Hero />
      <Search />
      {/* Body */}
      <div className="bg-white">
        {/* <Background /> */}
        <Cards />
      </div>
      {/* <Toast /> */}
    </div>
  );
}

export default Home;

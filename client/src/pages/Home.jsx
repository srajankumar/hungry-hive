import Background from "../components/Background";
import Hero from "../components/Home/Hero";
// import Search from "../components/Home/Search";
import Toast from "../components/Home/Toast";
import Cards from "../components/allRecipes";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-52 ">
        <span className="md:text-7xl text-4xl bg-[#0000006a] flex justify-center items-center w-full h-full main-heading text-green-400 drop-shadow-lg">
          Vegetarian
        </span>
      </div>
      {/* <Search /> */}
      {/* Body */}
      <div className="bg-white">
        <Cards />
      </div>
      <div className="w-full h-52 ">
        <span className="md:text-7xl text-4xl bg-[#0000006a] flex justify-center items-center w-full h-full main-heading text-red-400 drop-shadow-lg">
          Non-Vegetarian
        </span>
      </div>
      <div className="bg-white">
        <Cards />
      </div>
      {/* <Toast /> */}
    </div>
  );
}

export default Home;

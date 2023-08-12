import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Toast from "./components/Toast";

function App() {
  return (
    <div>
      <Hero />
      <Search />
      <div className="flex bg-white flex-wrap">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/500x300"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/501x301"
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/600x360"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/601x361"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/502x302"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/503x303"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-white flex-wrap">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/500x300"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/501x301"
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/600x360"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/601x361"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/502x302"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/503x303"
            />
          </div>
        </div>
      </div>

      <Toast />
    </div>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import SearchBar from "./components/SearchBar";
import TrendingSwipper from "./components/TrendingSwipper";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="flex bg-darkBlue text-pureWhite">
      <div className="relative w-2/12 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 mt-10 mr-4">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

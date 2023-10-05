import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import SearchBar from "./components/SearchBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-darkBlue text-pureWhite">
      <div className="relative w-2/12 h-screen hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 mt-10  m-auto ">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

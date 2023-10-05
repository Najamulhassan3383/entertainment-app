import SideBarIcon from "./SideBarIcon";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import series from "../assets/icon-nav-tv-series.svg";
import avatar from "../assets/image-avatar.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="absolute bg-semiDarkBlue top-12 rounded-xl left-0 h-5/6 w-20  flex flex-col items-center justify-between bg-white border-r border-gray-200 md:left-12">
      <NavLink to="/">
        <SideBarIcon icon={logo} text="Home" />
      </NavLink>
      <div>
        <NavLink to="/">
          <SideBarIcon icon={home} text="Home" />
        </NavLink>
        <NavLink to="movies">
          <SideBarIcon icon={movies} text="Movies" />
        </NavLink>
        <NavLink to="series">
          <SideBarIcon icon={series} text="Series" />
        </NavLink>
      </div>
      <div>
        <SideBarIcon avatar={true} icon={avatar} text="Avatar" />
      </div>
    </div>
  );
}
// const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;

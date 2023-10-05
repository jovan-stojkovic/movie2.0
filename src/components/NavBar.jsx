import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to={"/"}>
            <img
              className="logo"
              src="https://www.iconbolt.com/iconsets/atlas-icons/tv.svg"
              alt="home"
            />
          </Link>
          <ul className="navbar-links">
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link" to={"/toprated"}>
              TopRated
            </NavLink>
            <NavLink className="nav-link" to={"/action"}>
              Action
            </NavLink>
            <NavLink className="nav-link" to={"/comedy"}>
              Comedy
            </NavLink>
            <NavLink className="nav-link" to={"/horror"}>
              Horror
            </NavLink>
            <NavLink className="nav-link" to={"/romance"}>
              Romance
            </NavLink>
            <NavLink className="nav-link" to={"/documentaries"}>
              Documentaries
            </NavLink>
          </ul>
          <div className="actions">
            <button className="search">
                <img src="https://www.iconbolt.com/iconsets/anron-duotone/search.svg" alt="search" />
            </button>
            <button className="theme-togle">
                <img src="https://www.iconbolt.com/iconsets/anron-duotone/sun.svg" alt="theme" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

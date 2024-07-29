import { useContext,React } from "react";
import { NavLink } from "react-router-dom";
import { CardContext } from "../../context/CardContext";
const Header = () => {
  const { favorites } = useContext(CardContext);

  return (
    <div className="w-full h-20 bg-slate-500 flex items-center gap-10 justify-center">
      <NavLink
        className="bg-slate-800 p-4 text-white rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="bg-slate-800  text-white p-4 rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        className="bg-slate-800  text-white p-4 rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/favorites"}
      >
        Favorites
        <span className=" text-red-600 ml-2">
        ({favorites.length})
        </span>
      </NavLink>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-500 flex items-center gap-10 justify-center">
      <Link
        className="bg-slate-800 p-2 text-white rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="bg-slate-800  text-white p-2 rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/products"}
      >
        Products
      </Link>
      <Link
        className="bg-slate-800  text-white p-2 rounded-xl hover:bg-slate-600 ease-in-out duration-200"
        to={"/favorites"}
      >
        Favorites
      </Link>
    </div>
  );
};

export default Header;

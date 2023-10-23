import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-400 font-semibold uppercase border-b px-4 py-2 border-stone-600 sm:px-6 flex items-center justify-between shadow-md">
      <Link to={"/"} className="tracking-widest">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;

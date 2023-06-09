import React from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 my-2 flex justify-between items-center shadow-lg">
      <Link to="/">
        <img src={Logo} alt="" className="w-24" />
      </Link>
      <h1 className="font-bold text-sky-500 text-2xl">
        neoG React Practice Sets
      </h1>
      <ul className="flex items-center">
        <Link to="/setOne">
          <li className="mx-2 p-2 border border-black rounded-xl hover:cursor-pointer">
            Set-1
          </li>
        </Link>

        <Link to="/setTwo">
          <li className="mx-2 p-2 border border-black rounded-xl hover:cursor-pointer">
            Set-2
          </li>
        </Link>
        <Link to="/setThree">
          <li className="mx-2 p-2 border border-black rounded-xl hover:cursor-pointer">
            Set-3
          </li>
        </Link>
        {/* <li className="mx-2 p-2 border border-black rounded-xl hover:cursor-pointer">
          Set-4
        </li>
        <li className="mx-2 p-2 border border-black rounded-xl hover:cursor-pointer">
          Set-5
        </li> */}
      </ul>
    </div>
  );
};

export default Header;

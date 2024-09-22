import { useState } from "react";
import logo from "/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Product Management", path: "/product-management" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="bg-[#020C29] w-full flex  justify-between items-center py-4 mx-auto px-4">
      <Link to="/" className="flex items-center gap-2">
        <img
          className="max-w-9 lg:max-w-14 border-2 border-lime-400 img-fluid rounded-full"
          src={logo}
          alt="logo"
        />
        <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-lime-400">
          Campers <span className="text-lime-400">Shop</span>
        </h2>
      </Link>
      <ul className="hidden md:flex mx-auto text-center items-center justify-center">
        {navLinks.map((item) => (
          <li key={item.name} className="p-4 text-[18px]">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400 underline font-bold"
                  : "text-lime-300 font-semibold hover:text-lime-600"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex justify-end">
        <li className="p-4 flex items-center gap-1 flex-wrap">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `font-medium flex items-center ${
                isActive
                  ? "text-lime-400"
                  : "text-lime-400 hover:text-lime-600"
              }`
            }
          >
            <p className="text-[20px]">Cart</p>

            <div className="relative">
              <IoIosCart className="size-8" />
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-lime-400 border-2 border-[#020C29]  rounded-full text-center text-xs w-4 h-4 flex items-center justify-center">
                <p className="text-[#020C29] font-bold p-3">2</p>
              </span>
            </div>
          </NavLink>
        </li>
      </ul>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`block md:hidden cursor-pointer transition-transform duration-300 transform ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        {isOpen ? (
          <AiOutlineClose className="text-lime-400 size-5 font-semibold" />
        ) : (
          <AiOutlineMenu className="text-lime-400 size-5 font-semibold" />
        )}
      </div>
      <ul
        className={
          isOpen
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-lime-400  bg-[#020C29] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-xl font-bold m-4 text-lime-400 text-center px-auto"> Campers Shop</h1>
        {navLinks.map((item) => (
          <li key={item.name} className="p-4 border-b border-lime-500">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400 underline"
                  : "text-lime-300 hover:text-lime-600"
              }
              onClick={()=>setIsOpen(!isOpen)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

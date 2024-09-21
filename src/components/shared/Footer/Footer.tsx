
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,

} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.jpg";

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full relative  bg-[#020C29] py-6 px-8 text-gray-300">
        
    <div className="flex flex-col items-center">
      <Link to="/" className="flex items-center justify-center gap-2 mb-5">
        <img
          className="max-w-9 lg:max-w-14 border-2 border-lime-400 img-fluid rounded-full"
          src={logo}
          alt="logo"
        />
        <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-lime-400">
          Campers <span className="text-lime-400">Shop</span>
        </h2>
      </Link>
    </div>
  
    <div className="relative">
      <h1 className="text-center text-lime-400 underline font-bold my-4">
        Important Links
      </h1>
      <ul className="flex flex-col sm:flex-col lg:flex-row lg:justify-around lg:items-center text-center sm:text-sm lg:text-xl">
        <li className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 underline font-bold"
                : "text-lime-300 font-semibold hover:text-lime-600"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 underline font-bold"
                : "text-lime-300 font-semibold hover:text-lime-600"
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 underline md:font-bold"
                : "text-lime-300 md:font-semibold hover:text-lime-600"
            }
            to="/product-management"
          >
            Product Management
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 underline md:font-bold"
                : "text-lime-300 md:font-semibold hover:text-lime-600"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="w-1/2 mx-auto my-4 text-lime-400">
        <div className="flex justify-between pt-4 text-2xl text-lime-400">
          {items.map((x, index) => {
            return (
              <x.icon
                key={index}
                className="size-6 cursor-pointer hover:text-orange-500 custom-transition"
              />
            );
          })}
        </div>
      </div>
      <p className="mt-auto text-center">all rights are reserved by @campers.com</p>
    </div>
  </div>
  
  
  );
};

export default Footer;

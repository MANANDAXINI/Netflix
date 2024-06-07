import { useEffect, useRef, useState } from "react";
import logo from "../../../public/logo.png";
import searchicon from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
import prof from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";
import "./Navbar.css"; // Import your CSS file for Navbar styles
import { logout } from "../../firebase";


const Navbar = () => {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`Navbar w-full px-20 py-6 text-sm text-[#e5e5e5] bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent z-10 flex justify-between ${
        isScrolled ? "nav-dark fixed top-0 left-0" : ""
      }`}
    >
      <div className="Navbar-left flex items-center gap-[50px]">
        <img src={logo} alt="Logo" className="w-[96px]" />
        <ul className="text-white flex list-none gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse By Language</li>
        </ul>
      </div>

      <div className="Navbar-right flex gap-5 items-center ">
        <img src={searchicon} alt="Search" className="w-[20px] cursor-pointer" />
        <p>Children</p>
        <img src={bellicon} alt="Notifications" />
        <div className="profile flex items-center gap-[10px] cursor-pointer relative group">
          <img src={prof} alt="Profile" className="w-[35px]" />
          <img src={dropdown} alt="Dropdown" />

          <div className="dropdown absolute top-full right-0 w-max py-[18px] px-[22px] rounded-sm underline z-10 hidden group-hover:block bg-white text-black">
            <p className="text-sm cursor-pointer" onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
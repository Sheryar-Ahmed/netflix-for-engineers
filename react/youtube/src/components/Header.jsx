import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

const Header = ({ handleSearch }) => {
  const { theme, toggleTheme } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <header className="w-full">
      <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 dark:text-amber-200 text-white">
        <div className="flex items-center gap-3">
          <button className="icon-btn" aria-label="Menu">
            <RxHamburgerMenu size={24} />
          </button>
          <a href="/" className="flex items-center gap-1 text-xl font-bold">
            <span className="text-red-600">
              <FaYoutube size={24} />
            </span>
            YouTube <sup>PK</sup>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <label htmlFor="search">Search YouTube</label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              autoComplete="off"
              placeholder="Search"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 rounded px-2 py-1 text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer"
              aria-label="Search"
            >
              <CiSearch size={24} />
            </button>
          </form>
          <button className="icon-btn mic-btn" aria-label="Voice search">
            <FaMicrophone size={24} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="flex items-center">
            {theme === "light" ? (
              <MdModeNight size={24} />
            ) : (
              <MdLightMode size={24} />
            )}
          </button>
          <button
            className="text-sm font-medium px-3 py-1 rounded hover:bg-gray-700 transition flex items-center gap-1"
            aria-label="Create"
          >
            <IoAdd size={20} />
            <span>Create</span>
          </button>
          <button className="" aria-label="Notifications">
            <IoIosNotificationsOutline size={24} />
            <span className="">9</span>
          </button>
          <button className="cursor-pointer" aria-label="Account">
            <CgProfile size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

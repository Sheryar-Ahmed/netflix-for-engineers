import { useState } from "react";

const Header = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <header class="header">
      <div class="container">
        <div class="header-left">
          <img src="./menu.png" alt="menu" class="menu" />
          <div class="logo">
            <img
              src="./logo.png"
              alt="yt logo"
              width="50px"
              height="50px"
              class="menu"
            />
            <a href="https://www.youtube.com/" target="_top" class="logo">
              Youtube <sup>PK</sup>
            </a>
          </div>
        </div>
        <div class="header-center">
          <div>
            <form onSubmit={handleSubmit} class="search-form">
              <label htmlFor="search">Search for youtube</label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                autocomplete="off"
                placeholder="Search for yt"
                class="search-input"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button type="submit" class="search-btn">
                <img src="./search.png" alt="search" class="menu" />
              </button>
            </form>
          </div>
          <img src="./micro.png" alt="voice" class="menu" />
        </div>
        <div class="header-right">
          <button class="create-btn">
            <img src="./profile.png" alt="create" class="menu" />
            Create
          </button>

          <button>
            <img src="./profile.png" alt="notification" class="menu" />
            <span>9</span>
          </button>
          <button>
            <img src="./profile.png" alt="profile" class="menu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

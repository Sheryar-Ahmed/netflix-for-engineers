import { useState } from "react";

const Header = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <button className="icon-btn" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
          <a href="/" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            YouTube <sup>PK</sup>
          </a>
        </div>

        <div className="header-center">
          <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="search">Search YouTube</label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              autoComplete="off"
              placeholder="Search"
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>
          <button className="icon-btn mic-btn" aria-label="Voice search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="header-right">
          <button className="create-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
            <span>Create</span>
          </button>
          <button className="icon-btn badge-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="badge">9</span>
          </button>
          <button className="avatar" aria-label="Account">P</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

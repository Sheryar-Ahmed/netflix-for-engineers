import { useState } from "react";

const icons = {
  home: (
    <path d="M12 3 3 10.5V21h6v-6h6v6h6V10.5L12 3z" />
  ),
  explore: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1 4-4 1 1-4 4-1z" />
    </>
  ),
  subscriptions: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M6 4h12M9 12l4 2.5-4 2.5V12z" />
    </>
  ),
  library: (
    <>
      <path d="M4 6v14M8 6v14" />
      <rect x="12" y="4" width="8" height="16" rx="1" />
    </>
  ),
  history: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

const sidebarData = [
  { id: 1, title: "Home", icon: "home", link: "/" },
  { id: 2, title: "Explore", icon: "explore", link: "/explore" },
  { id: 3, title: "Subscriptions", icon: "subscriptions", link: "/subscriptions" },
  { id: 4, title: "Library", icon: "library", link: "/library" },
  { id: 5, title: "History", icon: "history", link: "/history" },
];

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-list">
          {sidebarData.map((item) => (
            <li
              key={item.id}
              className={`sidebar-item ${item.id === active ? "active" : ""}`}
            >
              <a
                href={item.link}
                className="sidebar-link"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.id);
                }}
              >
                <svg
                  className="sidebar-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[item.icon]}
                </svg>
                <span className="sidebar-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-divider" />
        <div className="sidebar-heading">Subscriptions</div>
      </nav>
    </aside>
  );
};

export default Sidebar;

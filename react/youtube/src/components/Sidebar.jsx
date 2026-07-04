import { sidbarData } from "../data/sidebar.js";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <nav>
        <ul class="sidebar-list">
          {sidbarData.map((item) => (
            <li key={item.id} className="sidebar-item">
              <a href={item.link} className="sidebar-link">
                <img className="sidebar-icon" src={item.icon} />
                <span className="sidebar-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

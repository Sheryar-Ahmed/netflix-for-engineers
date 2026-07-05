import { useState, useEffect } from "react";
import { api } from "../lib/api";

const FilterChips = ({ chip, onSelect }) => {
  const [filters, setFilters] = useState([{ id: "all", cat: "All" }]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const { data } = await api.get("/category");
        setFilters((prev) => [...prev, ...data]);
      } catch (err) {
        setError(err);
      }
    };

    fetchFilters();
  }, []);

  if (error) return null;

  return (
    <div className="filter-chips-row">
      {filters.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.cat)}
          className={`filter-chip ${cat.cat === chip ? "active" : ""}`}
        >
          {cat.cat}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;

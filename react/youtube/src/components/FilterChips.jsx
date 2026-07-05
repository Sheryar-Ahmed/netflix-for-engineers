import { useState, useEffect } from "react";
import { api } from "../lib/api";

const FilterChips = ({ setChip, handleSearch, chip }) => {
  const [filters, setFilters] = useState([{ id: 0, cat: "All" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const { data } = await api.get("/category");
        setFilters((prev) => [...data, ...prev]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  console.log("filters", filters, loading, error);
  return (
    <div className="filter-chips-row">
      {filters.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            setChip(cat.cat);
            handleSearch("");
          }}
          className={`filter-chip ${cat.cat === chip ? "active" : ""}`}
        >
          {cat.cat}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;

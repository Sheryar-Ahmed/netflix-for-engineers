import {filters} from "../data/filters";

const FilterChips = () => {
  return (
    <div className="filter-chips-row">
        {filters.map((cat) => (
            <button key={cat.id} className={`filter-chip ${cat.name === "All" ? "active" : ""}`}>
                {cat.name}
            </button>

        ) )}
    </div>
  )
}

export default FilterChips
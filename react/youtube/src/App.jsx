import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterChips from "./components/FilterChips";
import VideoGrid from "./components/VideoGrid";
import React, { useEffect, useMemo } from "react";
import { api } from "./lib/api";

function App() {
  // allVideos = untouched source of truth from the API.
  const [allVideos, setAllVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [chip, setChip] = React.useState("All");
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await api.get("/videos");
        setAllVideos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Derive what to show from the source list — never mutate allVideos.
  const videos = useMemo(() => {
    return allVideos.filter((video) => {
      const matchesSearch = video.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesChip = chip === "All" || video.cat === chip;
      return matchesSearch && matchesChip;
    });
  }, [allVideos, chip, search]);

  const handleSearch = (term) => setSearch(term);

  const handleChip = (cat) => {
    setChip(cat);
    setSearch("");
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="page-body">
        <Sidebar />
        <main>
          <FilterChips chip={chip} onSelect={handleChip} />
          <VideoGrid videos={videos} loading={loading} error={error} />
        </main>
      </div>
    </>
  );
}

export default App;

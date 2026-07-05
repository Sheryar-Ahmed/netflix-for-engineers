import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterChips from "./components/FilterChips";
import VideoGrid from "./components/VideoGrid";
import React, { useEffect } from "react";
import { api } from "./lib/api";

function App() {

  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [chip, setChip] = React.useState("All");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await api.get("/videos");

        setVideos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [chip]);


  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      const visible = videos.filter((video) => {
        const search = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const okChip = chip === "All" || video.cat === chip;
        return search && okChip;
      });
      setVideos(visible);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Header  handleSearch={handleSearch} />
      <div className="page-body">
        <Sidebar />
        <main>
          <FilterChips setChip={setChip} handleSearch={handleSearch}  chip={chip}/>
          <VideoGrid videos={videos} loading={loading} error={error} />
        </main>
      </div>
    </>
  );
}

export default App;

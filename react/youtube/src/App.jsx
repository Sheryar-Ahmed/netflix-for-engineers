import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterChips from "./components/FilterChips";
import VideoGrid from "./components/VideoGrid";

function App() {
  return (
    <>
      <Header />
      <div className="page-body">
        <Sidebar />
        <main>
          <FilterChips />
          <VideoGrid />
        </main>
      </div>
    </>
  );
}

export default App;

import VideoCard from "./VideoCard";

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton skeleton-thumb" />
    <div className="skeleton skeleton-line" />
    <div className="skeleton skeleton-line short" />
  </div>
);

const VideoGrid = ({ videos, loading, error }) => {
  return (
    <section className="w-full bg-amber-200 justify-items-center py-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Video Grid">
      {loading &&
        Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}

      {!loading &&
        !error &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}

      {!loading && !error && videos.length === 0 && (
        <p className="state-msg">No videos found. Try another filter.</p>
      )}

      {error && (
        <p className="state-msg">Something went wrong: {error.message}</p>
      )}
    </section>
  );
};

export default VideoGrid;



// spacing p-4, m-2, gap-4, gap-2, gap-3, gap-4
// layout flex, flex-col, flex-row, grid, grid-cols-3, grid-cols-4
// sizing w-1/2, w-1/3, w-1/4, w-full, h-1/2, h-1/3, h-1/4, h-full
// colors bg-gray-800, bg-gray-700, text-white, text-gray-400, text-gray-600
// effects hover:bg-gray-700, hover:text-white, transition, duration-300
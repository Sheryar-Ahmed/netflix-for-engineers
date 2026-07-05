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
    <section className="video-list" aria-label="Video Grid">
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

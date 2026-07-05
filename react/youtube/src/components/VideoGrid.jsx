import VideoCard from "./VideoCard";
const VideoGrid = ({videos, loading, error}) => {

  return (
    <section className="video-list" aria-label="Video Grid">
      {!loading && videos.length > 0 && videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {loading && <p>Loading...</p>}
      {!loading && videos.length === 0 && <p>No videos found.</p>}
      {error && <p>Error: {error.message}</p>}  
    </section>
  );
};

export default VideoGrid;

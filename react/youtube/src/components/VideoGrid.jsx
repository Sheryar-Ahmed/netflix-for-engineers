import { videos } from "../data/video";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <section className="video-grid" aria-label="Video Grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </section>
  );
};

export default VideoGrid;

const formatCount = (n) => {
  const num = Number(n) || 0;
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return String(num);
};

const VideoCard = ({ video }) => {
  const initial = (video?.channel_name || "?").charAt(0).toUpperCase();

  return (
    <article className="video-card">
      <div className="thumb-wrap">
        <img
          src={video?.thumbnail}
          alt={video?.title}
          className="video-thumbnail"
          loading="lazy"
        />
        <span className="thumb-badge">4K</span>
      </div>

      <div className="video-info">
        <div className="channel-avatar">{initial}</div>
        <div className="video-text">
          <h3 className="video-title">{video?.title}</h3>
          <span className="channel-name">{video?.channel_name}</span>
          <span className="video-stats">
            {formatCount(video?.likes)} likes
          </span>
          <span className="video-cat">{video?.cat}</span>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;

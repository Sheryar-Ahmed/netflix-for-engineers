const VideoCard = ({ video }) => {
  return (
    <article class="video-card">
      <img src={video.thumbnail} alt={video.title} class="video-thumbnail" />

      <div class="video-info">
        <div class="video-meta">
          <h3 class="video-title">{video?.title}</h3>
          <img
            src="assets/images/menu.png"
            alt="three dots"
            class="three-dots"
          />
        </div>
        <p class="video-stats">
          {video?.views} views · {video?.uploadDate}
        </p>
        <div>
          <img src="${video?.thumbnail}" alt="channel" class="channel-icon" />
          <span class="channel-name">{video?.channel}</span>
        </div>
        <p>#tags</p>
        <span>4K</span>
      </div>
    </article>
  );
};

export default VideoCard;

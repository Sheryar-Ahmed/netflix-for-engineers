import React from "react";
import vi from '../assets/watch_video_complete.mp4'

const WatchVideo = () => {
  return (
    <div className="w-full h-full">
      <video width="640" height="360" controls poster="thumbnail.jpg">
        <source src={vi} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OzenA6MPMUw?si=JSfGHEqFix2Nv-YB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default WatchVideo;

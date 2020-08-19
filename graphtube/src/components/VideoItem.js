import React from "react";
import "./styles.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item">
      <header>
        <div className="">
          <div className="text-center">{video.snippet.title}</div>
        </div>
      </header>
      <img
        className=""
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
    </div>
  );
};
export default VideoItem;

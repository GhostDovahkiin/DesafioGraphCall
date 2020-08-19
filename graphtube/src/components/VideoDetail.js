import React from "react";
import "./styles.css";
import videoImage from "../assets/images/undraw2.svg";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1 className="text-white tex-center">Hi! Happy to see you here.</h1>
        <img src={videoImage} className="img-fluid mt-5" alt="" />
        <p className="video-text text-white">
          Use this application to search for any video in youtube, and we will
          find the six most relevants for you, by clicking on the video, we will
          open and you can start playing the video. <br />
          This service is a challenge for my front-end application at GraphCall,
          hope i pass!
        </p>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="">
        <iframe
          width="560"
          title={video.id.videoId}
          height="315"
          src={videoSrc}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope;"
          allowfullscreen
          className="video-choose"
        ></iframe>
      </div>
      <div className="video-choose">
        <h4 className="text-white">{video.snippet.title}</h4>
        <p className="text-white text-left">{video.snippet.channelTitle}</p>
        <p className="text-white text-justify">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

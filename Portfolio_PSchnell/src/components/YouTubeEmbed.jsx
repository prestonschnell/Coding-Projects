import React from 'react';

const YouTubeEmbed = ({ videoId, width = "1200px", height = "720px" }) => {
  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;

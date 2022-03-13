import React from 'react'
import VideoItem from '../VideoItem/VideoItem'

// The VideList Component destructs videos from props.
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList

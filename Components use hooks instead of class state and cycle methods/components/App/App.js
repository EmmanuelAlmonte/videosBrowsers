import React, { useState, useEffect } from 'react'
import Searchbar from '../SearchBar/SearchBar'
import VideoList from '../VideoList/VideoList'
import VideoDetail from '../VideoDetail/VideoDetail'
import useVideos from '../useVideos/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container'>
      <Searchbar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

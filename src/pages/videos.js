import React from "react"
import Video from "../components/video"
import Layout from "../components/Layout"

export default () => {

  const playlist = [
    { title: "1", videoSourceURL: "https://www.youtube.com/embed/UxMGA9LhHq4", name: 'Fly with Icaro - São Conrado - RJ', description: 'Designed by Good Goods, Inc.' },
    { title: "2", videoSourceURL: "https://www.youtube.com/embed/m8UUCY3xxpA", name: 'Fly with Icaro - Sampaio Correia - RJ', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  ]

  return (
    <Layout>
      <div className="grid grid-flow-col grid-rows-2 gap-8 p-8 ">
        {playlist.map((video, index) => (
          <div className="flex items-center">
            <div className="flex justify-center p-12">
              <Video
                videoSourceURL={video.videoSourceURL}
                videoTitle={video.videoTitle}
              />
            </div>

            <div className="flex items-center px-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {video.name}</h2>
            </div>

          </div>

        ))}

      </div>
    </Layout>
  )
}

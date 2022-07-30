export async function getData() {
  const videos = await getAllChannelVideos("UC0-qBO4E42MO9_F2skwTXSw")

  const videosData = []

  for (let video of videos) {
    const data = await getVideoData(video.id.videoId)
    let videoData = {}
    videoData.id = data.id
    videoData.title = data.snippet.title
      .replaceAll(/(&quot;)/g, '"')
      .replaceAll(/(&#39;)/g, "'")
    videoData.thumbnail = data.snippet.thumbnails.medium.url
    let videoTags = data.snippet.tags
    videoData.composedBy = videoTags.includes("uMRy3Z")
      ? "kilian"
      : videoTags.includes("H5Kceo")
      ? "community"
      : videoTags.includes("dQpGjV")
      ? "classical"
      : videoTags.includes("A457uh")
      ? "other"
      : "unhandled"
    videoData.url = `https://www.youtube.com/watch?v=${data.id}`
    videoData.publishedAt = new Date(data.snippet.publishedAt).getTime()

    videosData.push(videoData)
  }

  return videosData
}

export async function getAllChannelVideos(channelId) {
  let videos = []
  let nextPageToken = null
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${process.env.VUE_APP_YOUTUBE}`
  )
  let data = await response.json()
  videos = videos.concat(data.items)
  nextPageToken = data.nextPageToken
  while (nextPageToken) {
    response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&pageToken=${nextPageToken}&key=${process.env.VUE_APP_YOUTUBE}`
    )
    data = await response.json()
    videos = videos.concat(data.items)
    nextPageToken = data.nextPageToken
  }
  return videos
}

export async function getVideoData(videoId) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.VUE_APP_YOUTUBE}`
  )
  let data = await response.json()
  return data.items[0]
}

import { tags } from "./maps"

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
    let videoTagsParsed = videoTags
      .filter(tag => tag.includes(":"))
      .map(tag => tag.split(":"))

    videoData.tags = {
      composer: videoTagsParsed
        .filter(tag => tag[0] === "c")
        .map(tag => tags.c[tag[1]]),
      interpreter: videoTagsParsed
        .filter(tag => tag[0] === "p")
        .map(tag => tags.p[tag[1]]),
      instrumentation: videoTagsParsed
        .filter(tag => tag[0] === "i")
        .map(tag => tags.i[tag[1]]),
      melody: videoTagsParsed
        .filter(tag => tag[0] === "m")
        .map(tag => tags.m[tag[1]])
    }

    for (let tag in videoData.tags) {
      if (!videoData.tags[tag].length) delete videoData.tags[tag]
    }

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

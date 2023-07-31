export interface VideoItemBaseThumbnailInterface {
  url: string;
  width: number;
  height: number;
}

export interface VideoItemThumbnailInterface {
  default: VideoItemBaseThumbnailInterface;
  medium: VideoItemBaseThumbnailInterface;
  high: VideoItemBaseThumbnailInterface;
}

export interface VideoItemSnippetInterface {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoItemThumbnailInterface;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface VideoItemIdInterface {
  kind: string;
  videoId: string;
}

export interface VideoItemInterface {
  kind: string;
  etag: string;
  id: VideoItemIdInterface;
  snippet: VideoItemSnippetInterface;
}

export interface PageInfoInterface {
  totalResults: number;
  resultsPerPage: number;
}

export interface VideosResultInterface {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: PageInfoInterface;
  items: VideoItemInterface[];
}

async function getVideos(count: number, cursor?: string) {
  const result = await fetch(
    `${
      process.env.REACT_APP_YOUTUBE_API
    }?part=snippet&maxResults=${count}&q=english movies&type=video&publishedAfter=2022-11-14T00:00:00Z&order=date${
      cursor !== undefined ? `&pageToken=${cursor}` : ``
    }&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );

  if (result?.ok) {
    const videos = await result?.json();
    return videos;
  }

  // return videosResult;
}

export { getVideos };

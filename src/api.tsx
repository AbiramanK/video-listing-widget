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

const videosResult: VideosResultInterface = {
  kind: "youtube#searchListResponse",
  etag: "nhgZwCjk7c85jYzwO3kuO8URfOA",
  nextPageToken: "CAgQAA",
  regionCode: "IN",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 8,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "40UhnF0fEld-bAbnLYIhWElnWek",
      id: {
        kind: "youtube#video",
        videoId: "0wctx28S_Yk",
      },
      snippet: {
        publishedAt: "2023-07-29T21:00:00Z",
        channelId: "UC4ZqZ6V67OWNUxBHLLv7yAA",
        title:
          "WHAT REALLY FRIGHTENS YOU 🎬 Full Exclusive Horror Movie Premiere 🎬 English HD 2023",
        description:
          "Title: WHAT REALLY FRIGHTENS YOU Summary: A mysterious writer working for a monster fanzine asks three New Yorkers ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0wctx28S_Yk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0wctx28S_Yk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0wctx28S_Yk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Watch Movies Now!",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T21:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "VPaOg19PBFXpKz5zjPMbwsnNJWU",
      id: {
        kind: "youtube#video",
        videoId: "UxLozeqPw7Y",
      },
      snippet: {
        publishedAt: "2023-07-29T19:00:12Z",
        channelId: "UCMpVFDZGhFHJ_YVgWlY3L_g",
        title:
          "PRISONERS OF THE LOST UNIVERSE 🎬 Exclusive Full Sci-Fi Action Movie Premiere 🎬 English HD 2023",
        description:
          "Title: PRISONERS OF THE LOST UNIVERS Summary: Three people are transported into a parallel reality, where they find they ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/UxLozeqPw7Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/UxLozeqPw7Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/UxLozeqPw7Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Watch Now - Sci-Fi & Fantasy",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T19:00:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "WdBYti8oZ0PnbdzuxMqaj88DQp4",
      id: {
        kind: "youtube#video",
        videoId: "ZrinmAyNK1g",
      },
      snippet: {
        publishedAt: "2023-07-29T16:00:10Z",
        channelId: "UCO8Y99VpR6e8CnM9sqaeULg",
        title:
          "FIRST LOVE. HE WILL NEVER FORGET HER ♥ ANGEL IN THE HEART ♥  Full Movie",
        description:
          "MEMORY MAP https://youtu.be/7yP2-6Dl5u0 THE FIGHTER https://youtu.be/MJeYLkGPbLc SECOND WIFE ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ZrinmAyNK1g/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ZrinmAyNK1g/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ZrinmAyNK1g/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "GetMovies English",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T16:00:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "4fR5m5R2KzJvgb0HO8DVlTIx6bQ",
      id: {
        kind: "youtube#video",
        videoId: "cpSie1XXbXw",
      },
      snippet: {
        publishedAt: "2023-07-29T15:01:48Z",
        channelId: "UCN4BWjpycAiQkhnb82_S2TQ",
        title:
          "17 ವರ್ಷದ ಹುಡುನಿಗೆ 37 ವರ್ಷದ ಹೆಂಡತಿ 20 ವರುಷದ ಮಕ್ಕಳು kannada movie story explained review #kannada",
        description:
          "17 ವರ್ಷದ ಹುಡುನಿಗೆ 37 ವರ್ಷದ ಹೆಂಡತಿ 20 ವರುಷದ ಮಕ್ಕಳು kannada movie story explained review ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cpSie1XXbXw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cpSie1XXbXw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cpSie1XXbXw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mov I Eyes",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T15:01:48Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "9Mjz3aCkdUb9aTbj5WfFvWVUM_Y",
      id: {
        kind: "youtube#video",
        videoId: "dMpm-JDbFpw",
      },
      snippet: {
        publishedAt: "2023-07-29T13:45:27Z",
        channelId: "UCAXq5rqJCtNDk85krx73I6w",
        title:
          "Top : 10 Best Adventure Hollywood Movies On YouTube in Hindi| Free Hollywood Movies| 2023 Movies",
        description:
          "Top : 10 Best Adventure Hollywood Movies On YouTube in Hindi| Free Hollywood Movies| 2023 Movies Need Your Support ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dMpm-JDbFpw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dMpm-JDbFpw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dMpm-JDbFpw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "AKR Update",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T13:45:27Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "853Oo5Jd2QLc4OOZxCui2xTK4Ps",
      id: {
        kind: "youtube#video",
        videoId: "7O_9XTOUqto",
      },
      snippet: {
        publishedAt: "2023-07-29T13:30:50Z",
        channelId: "UCNr3zipRTWMyNb7osiSN1dA",
        title:
          "FLIGHT 914 - Hollywood Action Movie Hindi Dubbed | Faran Tahir, Robbie Kay, Aqueela | Hindi Movie",
        description:
          "FLIGHT 914 - Hollywood Action Movie Hindi Dubbed | Faran Tahir, Robbie Kay, Aqueela | Hindi Movie After Flight 42 travels ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7O_9XTOUqto/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7O_9XTOUqto/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7O_9XTOUqto/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aethan",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T13:30:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "tskAx9tQFrcQVnRZ5v2vcQAGrs4",
      id: {
        kind: "youtube#video",
        videoId: "7WI1bokwwDY",
      },
      snippet: {
        publishedAt: "2023-07-29T13:17:29Z",
        channelId: "UCf8MxefNs0xEAof52f_fRTw",
        title:
          "Recent 10 Tamil Dubbed Movies | New Hollywood Movies in Tamil Dubbed | Playtamildub",
        description:
          "All new Hollywood Tamil Dubbed Movies & Series are listed in this video ✌   #recent #new Subscribe and support ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7WI1bokwwDY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7WI1bokwwDY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7WI1bokwwDY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Playtamildub",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T13:17:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ByjlzEc-sk4QnqQPnPfz1DUDAhk",
      id: {
        kind: "youtube#video",
        videoId: "ILD4ht1LQSs",
      },
      snippet: {
        publishedAt: "2023-07-29T12:45:01Z",
        channelId: "UCESbS1Q_2XPbykabBMR5mMg",
        title:
          "2023 New Hollywood Movie Mammoth | New Released Hollywood Hindi Dubbed Movie | New Hollywood Movies",
        description:
          "2023 New Hollywood Movie Mammoth | New Released Hollywood Hindi Dubbed Movie | 2023 Hollywood Movie Something has ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ILD4ht1LQSs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ILD4ht1LQSs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ILD4ht1LQSs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Hollywood Adventure Movies",
        liveBroadcastContent: "none",
        publishTime: "2023-07-29T12:45:01Z",
      },
    },
  ],
};

async function getVideos(count: number, cursor?: string) {
  // const result = await fetch(
  //   `${
  //     process.env.REACT_APP_YOUTUBE_API
  //   }?part=snippet&maxResults=${count}&q=english movies&type=video&key=${
  //     process.env.REACT_APP_GOOGLE_API_KEY
  //   }&publishedAfter=2022-11-14T00:00:00Z&order=date${
  //     cursor ? `&pageToken=${cursor}` : ""
  //   }`
  // );
  // console.log("videos result: ", result);
  // if (result?.ok) {
  //   const videos = await result?.json();
  //   console.log("videos: ", videos);
  //   return videos;
  // }
  return videosResult;
}

export { getVideos };

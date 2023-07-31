import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "components/VideoList/index.css";
import { CategoryCard, Title, VideoCard } from "components";
import VimeoLogo from "assets/images/vimeo.svg";
import { ReactComponent as SP } from "assets/images/sp.svg";
import { VideoItemInterface, getVideos } from "api";

const DEFAULT_MAX_RESULTS = parseInt(
  process.env.REACT_APP_DEFAULT_MAX_RESULTS!
);

export interface VideoListProps {}

function VideoList(props: VideoListProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  const [scrollAnimation, setScrollAnimation] = useState<boolean>(false);
  const [nextScroll, setNextScroll] = useState<boolean>(false);
  const [previousScroll, setPreviousScroll] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<VideoItemInterface>>();
  const [nextCursor, setNextCursor] = useState<string>();
  const [previousCursor, setPreviousCursor] = useState<string>();

  useEffect(() => {
    getVideosList();
  }, []);

  async function getVideosList(cursor?: string) {
    const data = await getVideos(DEFAULT_MAX_RESULTS, cursor!);

    setVideos(data?.items);
    setNextCursor(data?.nextPageToken);
    setPreviousCursor(data?.prevPageToken);
  }

  async function previous() {
    setScroll(true);
    setScrollAnimation(true);
    setNextScroll(false);
    setPreviousScroll(true);
    setVideos(undefined);

    setTimeout(async () => {
      getVideosList(previousCursor);
      setScroll(false);
      setPreviousScroll(false);
    }, 500);

    setTimeout(() => {
      setScrollAnimation(false);
    }, 800);
  }

  async function next() {
    setScroll(true);
    setScrollAnimation(true);
    setPreviousScroll(false);
    setNextScroll(true);
    setVideos(undefined);

    setTimeout(async () => {
      getVideosList(nextCursor);
      setScroll(false);
    }, 500);

    setTimeout(() => {
      setScrollAnimation(false);
    }, 800);
  }
  return (
    <Container id="videoListContainer" className="videoListContainer">
      <Title
        style={{ zIndex: 1, pointerEvents: previousCursor ? "auto" : "none" }}
      >
        <i
          className="bi bi-chevron-left paginationArrow"
          onClick={previous}
        ></i>
      </Title>
      <CategoryCard
        title="Vimeo Staff Picks"
        description="The best short films on the internet, handpicked by Vimeo staff"
        logo={VimeoLogo}
        containerStyle={{ zIndex: 1 }}
      />
      <Container
        className={`videoContent ${
          previousScroll
            ? "nextVideoContainer"
            : scrollAnimation && !nextScroll
            ? ""
            : scroll && (nextScroll || !previousScroll)
            ? "videoContainer"
            : "nextVideoContainer"
        } ${
          previousScroll
            ? ""
            : scrollAnimation
            ? "scrollAnimation"
            : "nextScrollAnimation"
        }`}
      >
        {(videos ?? [...new Array(DEFAULT_MAX_RESULTS)])?.map(
          (video, index) => (
            <VideoCard
              key={video?.id?.videoId! ?? index}
              coverPic={video?.snippet?.thumbnails?.high?.url!}
              title={video?.snippet?.title!}
              author={video?.snippet?.channelTitle}
              authorPic={SP}
              views={video! ? 896 : undefined}
              duration={video! ? "10:18" : undefined}
            />
          )
        )}
      </Container>
      <Title
        style={{
          zIndex: 1,
          marginLeft: nextScroll ? -15 : -30,
          pointerEvents: nextCursor ? "auto" : "none",
        }}
      >
        <i className="bi bi-chevron-right paginationArrow" onClick={next}></i>
      </Title>
    </Container>
  );
}

export default VideoList;

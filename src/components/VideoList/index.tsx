import { useState } from "react";
import { Container } from "react-bootstrap";

import "components/VideoList/index.css";
import { CategoryCard, Title, VideoCard } from "components";
import VimeoLogo from "assets/images/vimeo.svg";
import Movie from "assets/images/test.avif";
import { ReactComponent as SP } from "assets/images/sp.svg";

export interface VideoListProps {}

function VideoList(props: VideoListProps) {
  const [nextScroll, setNextScroll] = useState<boolean>(false);

  function previous() {
    setNextScroll(false);
  }

  function next() {
    setNextScroll(true);
  }
  return (
    <Container id="videoListContainer" className="videoListContainer">
      <Title style={{ zIndex: 1 }}>
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
        id="videoContainer"
        className={`videoContainer ${nextScroll ? "scrollAnimation" : ""}`}
      >
        {[...new Array(8)]?.map((_, index) => (
          <VideoCard
            key={index}
            coverPic={Movie}
            title="I'M NOT AN ACTIVIST"
            author="Dan Chen"
            authorPic={SP}
            views={896}
            duration="10:18"
          />
        ))}
      </Container>
      <Container
        id="nextVideoContainer"
        className={`nextVideoContainer ${
          nextScroll ? "nextScrollAnimation" : ""
        }`}
      >
        {[...new Array(8)]?.map((_, index) => (
          <VideoCard key={`${index}-next`} />
        ))}
      </Container>
      <Title style={{ zIndex: 1, marginLeft: nextScroll ? -15 : -30 }}>
        <i className="bi bi-chevron-right paginationArrow" onClick={next}></i>
      </Title>
    </Container>
  );
}

export default VideoList;

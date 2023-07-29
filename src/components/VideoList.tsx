import { CategoryCard, VideoCard } from "components";
import VimeoLogo from "assets/images/vimeo.svg";
import Movie from "assets/images/test.avif";
import { ReactComponent as SP } from "assets/images/sp.svg";

export interface VideoListProps {}

function VideoList(props: VideoListProps) {
  return (
    <>
      <CategoryCard
        title="Vimeo Staff Picks"
        description="The best short films on the internet, handpicked by Vimeo staff"
        logo={VimeoLogo}
      />
      <VideoCard
        coverPic={Movie}
        title="I'M NOT AN ACTIVIST"
        author="Dan Chen"
        authorPic={SP}
        views={896}
        duration="10:18"
      />
    </>
  );
}

export default VideoList;

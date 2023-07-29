import React, { FunctionComponent, SVGProps, useState } from "react";
import { Card, Container } from "react-bootstrap";

import "components/VideoCard/index.css";
import Movie from "assets/images/test.avif";
import { ReactComponent as SP } from "assets/images/sp.svg";
import Fade from "components/Fade";
import Button from "components/Button";
import Title from "components/Title";
import Description from "components/Description";

export interface VideoCardProps {
  coverPic?: string;
  title?: string;
  author?: string;
  views?: number;
  authorPic?: FunctionComponent<SVGProps<SVGSVGElement>>;
  duration?: string;
}

function VideoCard(props: VideoCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
  }

  return (
    <React.Fragment>
      <Card
        className="videoCard"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-controls="logContainer"
        aria-expanded={!hovered}
        style={{ borderRadius: 0, borderWidth: 0 }}
      >
        <Card.Body
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
        >
          <Container style={{ position: "relative", padding: 0 }}>
            <Card.Img src={props?.coverPic} style={{ borderRadius: 0 }} />

            <div id="logoContainer" className="logoContainer">
              <Fade visible={!hovered}>
                <SP className="logo" />
              </Fade>
            </div>
            <div className="playButtonContainer">
              <Fade visible={hovered} transition="bottom">
                <Button
                  startIcon={
                    <i className="bi bi-play-fill" style={{ fontSize: 30 }}></i>
                  }
                  style={{
                    paddingBlock: 0,
                    paddingInline: 15,
                  }}
                  hoverEffect={true}
                />
              </Fade>
            </div>
            <div className="addToWatchLaterContainer">
              <Fade visible={hovered} transition="bottom">
                <Button
                  startIcon={
                    <i className="bi bi-clock" style={{ fontSize: 16 }}></i>
                  }
                  style={{
                    paddingInline: 8,
                  }}
                  hoverEffect={true}
                />
              </Fade>
            </div>
            <div className="durationContainer">
              <Fade visible={hovered} transition="bottom">
                <span className="duration">{props?.duration}</span>
              </Fade>
            </div>
          </Container>
          <Container
            style={{
              padding: 0,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              rowGap: 4,
            }}
          >
            <Title style={{ fontSize: 14, marginBottom: 0 }}>
              {props?.title}
            </Title>
            <Container
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                columnGap: 5,
              }}
            >
              <SP className="profile" />
              <Description>{props?.author}</Description>
              <Description>|</Description>
              <Description>{props?.views} views</Description>
            </Container>
          </Container>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default VideoCard;

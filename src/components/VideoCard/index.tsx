import React, { FunctionComponent, SVGProps, useState } from "react";
import { Card, Container, Placeholder } from "react-bootstrap";

import "components/VideoCard/index.css";
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
  cardStyle?: React.CSSProperties;
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
        style={{
          borderRadius: 0,
          borderWidth: 0,
          ...props?.cardStyle,
        }}
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
            {props?.coverPic ? (
              <Card.Img src={props?.coverPic} style={{ borderRadius: 0 }} />
            ) : (
              <Placeholder animation="glow">
                <Placeholder xs={12} style={{ height: 160 }} />
              </Placeholder>
            )}

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
                <span className="duration">{props?.duration ?? "--:--"}</span>
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
            {props?.title ? (
              <Title style={{ fontSize: 14, marginBottom: 0 }}>
                {props?.title}
              </Title>
            ) : (
              <Placeholder animation="glow">
                <Placeholder xs={8} />
              </Placeholder>
            )}
            <Container
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                columnGap: 5,
              }}
            >
              {props?.author ? (
                <>
                  <SP className="profile" />
                  <Description>{props?.author}</Description>
                </>
              ) : (
                <>
                  <Placeholder
                    size="lg"
                    style={{ width: 20, borderRadius: 10 }}
                  />
                  <Placeholder xs={4} />
                </>
              )}
              <Description>|</Description>
              {props?.views ? (
                <Description>{props?.views} views</Description>
              ) : (
                <Placeholder xs={2} />
              )}
            </Container>
          </Container>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default VideoCard;

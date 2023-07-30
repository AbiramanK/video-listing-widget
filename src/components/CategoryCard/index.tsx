import React from "react";
import Card from "react-bootstrap/Card";

import "components/CategoryCard/index.css";
import Button, { ButtonProps } from "components/Button";
import Title from "components/Title";

export interface CategoryCardProps {
  title?: string;
  description?: string;
  logo?: string;
  button?: ButtonProps;
  containerStyle?: React.CSSProperties;
}

function CategoryCard(props: CategoryCardProps) {
  return (
    <React.Fragment>
      <Card
        id="categoryCard"
        className="categoryCard"
        style={{ ...props?.containerStyle }}
      >
        <Card.Body className="categoryCardBody" style={{ padding: 0 }}>
          <Card.Img
            src={props?.logo}
            width={150}
            height={150}
            className="categoryCardCoverImage"
          />
          <div className="categoryCardCoverContainer" />
          <div className="actionContainer">
            <div className="descriptionContainer">
              <Title>{props?.title}</Title>
              <p className="categoryCardText">{props?.description}</p>
            </div>
            <Button
              title={props?.button?.title ?? "Watch now"}
              startIcon={
                props?.button?.startIcon ?? (
                  <i className="bi bi-play-fill playIcon"></i>
                )
              }
              {...props?.button}
            />
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default CategoryCard;

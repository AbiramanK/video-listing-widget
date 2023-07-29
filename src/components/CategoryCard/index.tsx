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
}

function CategoryCard(props: CategoryCardProps) {
  return (
    <React.Fragment>
      <Card className="card">
        <Card.Body className="cardBody" style={{ padding: 0 }}>
          <Card.Img
            src={props?.logo}
            width={150}
            height={150}
            className="cardCoverImage"
          />
          <div className="cardCoverContainer" />
          <div className="actionContainer">
            <div className="descriptionContainer">
              <Title>{props?.title}</Title>
              <p className="cardText">{props?.description}</p>
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

import React from "react";
import RBButton from "react-bootstrap/Button";

import "components/Button/index.css";

export interface ButtonProps {
  title?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: Function;
}

function Button(props: ButtonProps) {
  function onClick() {
    if (props?.onClick!) {
      props?.onClick();
    }
  }
  return (
    <RBButton
      className="button"
      style={{ paddingBlock: 3, ...props?.style }}
      onClick={onClick}
    >
      {props?.startIcon}
      {props?.title}
      {props?.endIcon}
    </RBButton>
  );
}

export default Button;

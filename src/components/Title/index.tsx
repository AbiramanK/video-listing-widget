import React from "react";

import "components/Title/index.css";

export interface TitleProps {
  style?: React.CSSProperties;
}

function Title(props: React.PropsWithChildren<TitleProps>) {
  return (
    <h2 className="title" style={props?.style}>
      {props?.children}
    </h2>
  );
}

export default Title;

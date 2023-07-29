import React from "react";

import "components/Description/index.css";

export interface DescriptionProps {
  style?: React.CSSProperties;
}

function Description(props: React.PropsWithChildren<DescriptionProps>) {
  return (
    <p className="description" style={{ marginBottom: 0, ...props?.style }}>
      {props?.children}
    </p>
  );
}

export default Description;

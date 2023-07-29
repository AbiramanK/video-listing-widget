import React from "react";

import "components/Fade/index.css";

export interface FadeProps {
  visible?: boolean;
  transition?: "top" | "bottom";
}

function Fade(props: React.PropsWithChildren<FadeProps>) {
  return (
    <div
      className={`fadeInSection ${props?.transition ?? "top"} ${
        props?.visible ? "isVisible" : "isHide"
      }`}
    >
      {props?.children}
    </div>
  );
}

export default Fade;

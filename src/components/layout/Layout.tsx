import React, { ReactChildren, ReactChild } from "react";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = props => {
  return (
    <>
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </>
  );
};

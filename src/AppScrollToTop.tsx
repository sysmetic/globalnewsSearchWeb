import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AppScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../Context";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { isMobile, theme } = useContext(Context);
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("light");
    body.classList.remove("dark");
    body.classList.add(theme);
  }, [theme]);
  useEffect(() => {
    if (pathname !== path) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;

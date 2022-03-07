import { useContext } from "react";
import { Context } from "../../Context";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { isMobile } = useContext(Context);
  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;

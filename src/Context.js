import { useState, createContext, useEffect } from "react";
import { data } from "./data";
export const Context = createContext();
const PortfolioContext = ({ children }) => {
  const mobileMaxWidth = 768;
  const { Provider } = Context;

  const setTheme = (theme) => {
    setValue((prevState) => {
      return { ...prevState, theme };
    });
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState({
    theme: "dark",
    isMobile: width < mobileMaxWidth,
    deviceWidth: width,
    projects: null,
    actions: { setTheme },
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      setValue((prevState) => {
        return { ...prevState, deviceWidth: width, isMobile: true };
      });
    } else {
      // false for not mobile device
      setValue((prevState) => {
        return {
          ...prevState,
          deviceWidth: width,
          isMobile: width < mobileMaxWidth,
        };
      });
    }
    setValue((prevState) => {
      return { ...prevState, projects: data };
    });
  }, [width]);

  useEffect(() => {
    if (value.theme === "dark") {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#000");
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#FFF");
    }
  }, [value.theme]);
  return <Provider value={value}>{children}</Provider>;
};
export default PortfolioContext;

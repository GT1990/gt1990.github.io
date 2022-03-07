import { useState, createContext, useEffect } from "react";

export const Context = createContext();
const PortfolioContext = ({ children }) => {
  const mobileMaxWidth = 768;
  const { Provider } = Context;
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState({
    theme: "dark",
    isMobile: width < mobileMaxWidth,
    data: {
      title: "My First Program",
      tech: ["JavaScript", "React", "Node.js"],
    },
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    setValue((prevState) => {
      return { ...prevState, isMobile: width < mobileMaxWidth };
    });
  }, [width]);
  return <Provider value={value}>{children}</Provider>;
};
export default PortfolioContext;

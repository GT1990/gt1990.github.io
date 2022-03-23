import { useContext } from "react";
import { Context } from "../../Context";
import "../../css/components/headers/ThemeIcon.css";

const ThemeIcon = ({ display }) => {
  const { theme, actions } = useContext(Context);
  const toogleTheme = () => {
    if (theme === "dark") {
      actions.setTheme("light");
    } else {
      actions.setTheme("dark");
    }
  };
  return (
    <div id="theme-wrapper" className={display} onClick={toogleTheme}>
      <svg className={theme} id="theme-icon" viewBox="0 0 32 32">
        <g
          fill="none"
          fillRule="evenodd"
          id="Page-1"
          stroke="none"
          strokeWidth="1"
        >
          <g id="icon-half">
            <path d="M14,22 C17.3137087,22 20,19.3137087 20,16 C20,12.6862913 17.3137087,10 14,10 C10.6862913,10 8,12.6862913 8,16 C8,19.3137087 10.6862913,22 14,22 L14,22 Z M14,21 L14,16 L14,11 C11.2385763,11 9,13.2385763 9,16 C9,18.7614237 11.2385763,21 14,21 L14,21 Z" />
          </g>
        </g>
      </svg>
      <span>{theme === "dark" ? "Dark" : "Light"} theme</span>
    </div>
  );
};
export default ThemeIcon;

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { FaAngleUp } from "react-icons/fa";
import "../assets/styles/style.css";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className={`icon-position icon-style${
            theme === "light" ? " light" : ""
          }`}
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
}

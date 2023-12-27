import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { ImFontSize } from "react-icons/im";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`footer${theme === "light" ? " light" : ""}`}>
      <a
        href="https://www.linkedin.com/in/santiago-boscan/"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        rel="noreferrer"
        target="_blank"
        title="LinkedIn Profile"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/borkoloco"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        rel="noreferrer"
        target="_blank"
        title="Github Profile"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:santiagobosca@gmail.email"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        rel="noreferrer"
        target="_blank"
        title="Send Me An Email"
      >
        <GoMail />
      </a>
      <p>
        <FaReact
          className={`react-logo${theme === "light" ? " light" : ""}`}
          alt="React logo"
          title="This project was built using React"
        />
        <a
          href="https://www.onlinewebfonts.com/icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImFontSize
            className={`font-logo${theme === "light" ? " light" : ""}`}
            title="Icons made from svg icons is licensed by CC BY 4.0"
          />
        </a>
      </p>
    </div>
  );
}

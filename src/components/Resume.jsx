import resume from "../assets/images/resume.png";
import { useTheme } from "./ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="resume" className="resume-section">
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div className="resume__container">
        <a
          href="https://res.cloudinary.com/ddx1ikpma/image/upload/v1703889203/resume_xwxwn7.png"
          className="resume__link"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className={`resume__img${theme === "light" ? " light" : ""}`}
            src={resume}
            title="Click to view PDF"
          />
        </a>
      </div>
    </section>
  );
}

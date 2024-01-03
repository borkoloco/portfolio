import "../assets/styles/style.css";
import { useTheme } from "./ThemeContext";
import PropTypes from "prop-types";
import {
  SiJavascript,
  SiReact,
  SiJest,
  SiBootstrap,
  SiDotenv,
  SiWebpack,
  SiGooglemaps,
  SiPython,
  SiDjango,
  SiHere,
  SiMercadopago,
  SiVite,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiSlack,
  SiFirebase,
  SiSequelize,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function handleClick(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("data-href");
  if (href) {
    window.open(href, "_blank");
  } else {
    console.error("Missing URL");
  }
}

const iconMap = {
  SiJavascript: <SiJavascript />,
  FaReact: <SiReact />,
  SiJest: <SiJest />,
  SiBootstrap: <SiBootstrap />,
  SiDotenv: <SiDotenv />,
  SiWebpack: <SiWebpack />,
  SiGooglemaps: <SiGooglemaps />,
  SiPython: <SiPython />,
  SiDjango: <SiDjango />,
  SiHere: <SiHere />,
  SiMercadopago: <SiMercadopago />,
  SiVite: <SiVite />,
  SiStyledcomponents: <SiStyledcomponents />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiSlack: <SiSlack />,
  SiFirebase: <SiFirebase />,
  SiSequelize: <SiSequelize />,
};
export default function ProjectCard({
  title,
  description,
  image,
  live,
  github,
  builtWith,
}) {
  const { theme } = useTheme();

  return (
    <div className="project-card">
      <img src={image} className="project-card__img" />
      <div className="project-card__details-container">
        <div className="project-card__header-container">
          <h3 className="title" style={{ textDecoration: "underline" }}>
            {title}
          </h3>
          <div className="built-with-icons">
            {builtWith.map((icon, index) => (
              <span style={{ marginRight: "0.8em" }} key={index}>
                {iconMap[icon]}
              </span>
            ))}
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="btn-container">
          <button
            className={`btn live${theme === "light" ? " light" : ""}`}
            rel="noreferrer"
            data-href={live}
            alt="Live site"
            title="Live site"
            onClick={handleClick}
          >
            Live
            <CgWebsite style={{ height: "1.5em", width: "1.5em" }} />
          </button>
          <button
            className={`btn github${theme === "light" ? " light" : ""}`}
            rel="noreferrer"
            data-href={github}
            alt="Github repo"
            title="Github repo"
            onClick={handleClick}
          >
            Github
            <BsGithub style={{ height: "1.5em", width: "1.5em" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  builtWith: PropTypes.array,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

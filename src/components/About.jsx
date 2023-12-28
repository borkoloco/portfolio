import img from "../assets/images/image77.png";
import { useTheme } from "./ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="about">
      <h2 className={`page-header page-header-${theme}`}>About Me</h2>
      <div>
        <div className="bio-img">
          <img src={img} />
        </div>
        <div className="bio-desc">
          <p>
            Driven by a childhood curiosity to understand how things work,
            I&apos;ve always been passionate about deconstructing and
            reassembling the world around me. As a GMAT teacher, I helped
            leaders of large companies and the public sector to go through the
            MBA admission process.
          </p>

          <p>
            With my interests leaning more towards technology, I pivoted my
            career and took the plunge into a full-time web development
            bootcamp. This transformative experience taught me the power of
            rapid learning, resilience, and the importance of embracing new
            challenges.
          </p>

          <p>
            Today, as an app developer, I am proud to combine my passions for
            learning, problem-solving, and creating solutions that empower
            others to focus on their work without getting bogged down by
            inefficient processes. I&apos;m excited to continue growing in tech
            and contribute my skills to develop meaningful products that make a
            difference in people&apos;s lives.
          </p>
        </div>
      </div>
    </section>
  );
}

import img from "../assets/images/dev.svg";

export default function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__header">
        <h1>Santiago Bosca</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div>
        <img src={img} className="landing__img" />
      </div>
    </section>
  );
}

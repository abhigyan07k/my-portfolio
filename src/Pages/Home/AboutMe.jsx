import aboutImg from "../../img/about_img.png";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            A passionate MERN Stack Developer with a strong interest in UI/UX
            design and creating impactful digital experiences. I’m currently
            pursuing my B.E. in Computer Science from Rabindranath Tagore
            University (RNTU), Bhopal.
          </p>
          <p className="hero--section-description">
            I’ve created multiple projects like a Zerodha Clone, Spotify Clone.
            Apart from coding, I enjoy editing videos, crafting visual content,
            and contributing to technical events as a podcaster and social media
            manager. I’m always open to exciting collaborations, internships, or
            freelance work where I can contribute meaningfully and grow further.
          </p>
        </div>
      </div>
    </section>
  );
}

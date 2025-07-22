import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abhigyan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              <Typewriter
                words={["Web Developer", "UI/UX Designer", "Video Editor"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="hero--section-description">
            Currently exploring exciting opportunities to grow
            <br /> as a developer and build impactful products.
          </p>
        </div>
        <div className="btn-container">
          <button
            className="hire-btn"
            onClick={() =>
              document
                .getElementById("Contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          <button className="download-btn">
            <a
              href="https://drive.google.com/file/d/13AkcUV_CM_a3LZTTMe-CcFh-6dlIJBch/view?usp=drivesdk"
              target="blank"
            >
              Download CV <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/hero-section-image.png"
          alt="Hero Section"
          style={{ width: "85%" }}
        />
      </div>
    </section>
  );
}

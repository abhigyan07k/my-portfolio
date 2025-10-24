import data from "../../data/index.json";
import {
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaCloud,
  FaVideo,
  FaPenFancy,
} from "react-icons/fa";

const iconMap = {
  FaCode: <FaCode size={50} color="#006b6a" />,
  FaServer: <FaServer size={50} color="#006b6a" />,
  FaProjectDiagram: <FaProjectDiagram size={50} color="#006b6a" />,
  FaCloud: <FaCloud size={50} color="#006b6a" />,
  FaVideo: <FaVideo size={50} color="#006b6a" />,
  FaPenFancy: <FaPenFancy size={50} color="#006b6a" />,
};

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills-icon">
              {iconMap[item.icon]} {/* icon property use ho rahi hai */}
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

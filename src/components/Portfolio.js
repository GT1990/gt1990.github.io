import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import "../css/components/Portfolio.css";
const Portfolio = () => {
  const imagesSrc = "/img/projects/";
  const { projects } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const displayProjects = () => {
    return projects.map((project, index) => (
      <Link to={"/projects/" + index} key={index}>
        <img src={project.image_urls[0]} />
        <label>{project.project_name}</label>
        <span>View Project Details</span>
      </Link>
    ));
  };
  useEffect(() => {
    if (projects) {
      setLoading(false);
    }
  }, [projects]);
  return (
    <main className="portfolio">
      {loading ? null : (
        <>
          <h1>My Work</h1>
          <div className="grid">{displayProjects()}</div>
        </>
      )}
    </main>
  );
};
export default Portfolio;

import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import "../css/components/ProjectDetails.css";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

import ReactMarkdown from "react-markdown";
const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = useContext(Context);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (projects) {
      if (projects[id]) {
        setProject(projects[id]);
        setLoading(false);
      } else {
        setError(<h1 className="error">Project Not Found!</h1>);
        setLoading(false);
      }
    }
  }, [projects, id]);

  return (
    <>
      {loading ? null : error ? (
        error
      ) : (
        <main className="project-details">
          <Link className="button" to="/projects">
            <FaRegArrowAltCircleLeft />
            <span>All Projects</span>
          </Link>
          <h1>{project.project_name}</h1>
          <div className="left">
            <h2>Description:</h2>
            <ReactMarkdown>{project.description}</ReactMarkdown>
            <div className="screenshots-wrapper">
              <h2>Screen Shots:</h2>
              {project.image_urls.map((src, index) => (
                <img src={src} alt={src} key={index} />
              ))}
            </div>
          </div>
          <div className="right">
            <h2>Technologies:</h2>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <ul>
              <a className="button" href={project.live_link} target="_blank">
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
              <a className="button" href={project.github_link} target="_blank">
                <FaGithub />
                <span>GitHub Repo</span>
              </a>
            </ul>
          </div>
        </main>
      )}
    </>
  );
};
export default ProjectDetails;

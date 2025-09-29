import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import "./latestProjects.css";

export default function LatestProjects() {
  const latestProjects = projects.slice(-4);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (hoveredIndex !== null) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const prevIndex = prev[hoveredIndex] || 0;
          const nextIndex =
            (prevIndex + 1) % latestProjects[hoveredIndex].images.length;
          return { ...prev, [hoveredIndex]: nextIndex };
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, latestProjects]);

  return (
    <div className="projects">
      <h2>Dernières Réalisations</h2>
      <div className="project-img">
        {latestProjects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="project-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={
                hoveredIndex === index
                  ? project.images[currentImage[index] || 0]
                  : project.images[0]
              }
              alt={project.title}
            />
            <div className="project-content">
              <div className="project-content-hashtag">
                <p>{project.customer}</p>
                <p>{project.year}</p>
                <p>{project.price}</p>
                <p>{project.time}</p>
              </div>
              <p className="project-content-description">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="projects-link">
        <Link
          to="/projects"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Voir tout mes projets
        </Link>
      </div>
    </div>
  );
}

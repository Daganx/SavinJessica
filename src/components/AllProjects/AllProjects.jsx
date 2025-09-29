import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import Separator from "../Separator/Separator";
import "./allProjects.css";

export default function AllProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (hoveredIndex !== null) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const prevIndex = prev[hoveredIndex] || 0;
          const nextIndex =
            (prevIndex + 1) % projects[hoveredIndex].images.length;
          return { ...prev, [hoveredIndex]: nextIndex };
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex]);

  return (
    <div className="all-projects">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="all-projects-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="project-img">
            <img
              src={
                hoveredIndex === index
                  ? project.images[currentImage[index] || 0]
                  : project.images[0]
              }
              alt={project.title}
              className="all-projects-image"
            />
            <div className="project-content">
              <p className="project-content-description">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
      <Separator />
    </div>
  );
}

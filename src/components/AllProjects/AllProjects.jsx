import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Separator from "../Separator/Separator";
import "./allProjects.css";

export default function AllProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState({});
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // -----------------------
  // Fetch des projets depuis API Render
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://savinjessica-back.onrender.com/api/projects"
        );
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors du fetch des projets :", err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // -----------------------
  // Animation des images au survol
  useEffect(() => {
    if (hoveredIndex !== null && projects.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const prevIndex = prev[hoveredIndex] || 0;
          const nextIndex =
            (prevIndex + 1) % projects[hoveredIndex].images.length;
          return { ...prev, [hoveredIndex]: nextIndex };
        });
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, projects]);

  if (loading) return <p>Chargement des projets...</p>;

  return (
    <div className="all-projects">
      {projects.map((project, index) => (
        <Link
          key={project._id}
          to={`/projects/${project._id}`}
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
              <div className="project-content-hashtag">
                <p>{project.customer}</p>
                <p>{project.year}</p>
                <p>{project.price}</p>
                <p>{project.place}</p>
              </div>
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

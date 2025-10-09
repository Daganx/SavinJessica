import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./latestProjects.css";

export default function LatestProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  // Récupération des projets depuis le back (déjà triés par createdAt desc)
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

  // Prend uniquement les 4 plus récents
  const latestProjects = projects.slice(0, 4);

  useEffect(() => {
    if (hoveredIndex !== null && latestProjects.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const prevIndex = prev[hoveredIndex] || 0;
          const nextIndex =
            (prevIndex + 1) % latestProjects[hoveredIndex].images.length;
          return { ...prev, [hoveredIndex]: nextIndex };
        });
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, latestProjects]);

  if (loading) return <p>Chargement des projets...</p>;

  return (
    <div className="projects">
      <h2>Dernières Réalisations</h2>
      <div className="project-img">
        {latestProjects.map((project, index) => (
          <Link
            key={project._id}
            to={`/projects/${project._id}`}
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
                <p>{project.place}</p>
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

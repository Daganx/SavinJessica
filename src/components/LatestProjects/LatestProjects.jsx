import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./latestProjects.css";

export default function LatestProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://savinjessica-back.onrender.com/api/projects"
        );
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Erreur lors du fetch des projets :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const latestProjects = projects.slice(0, 4);

  if (loading) return <p>Chargement des projets...</p>;

  return (
    <div className="projects">
      <h2>Dernières Réalisations</h2>

      <div className="projects-grid">
        {latestProjects.map((project) => (
          <Link
            key={project._id}
            to={`/projects/${project._id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="project-card"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="project-image"
            />
            <div className="project-hashtags">
              <p>#{project.customer}</p>
              <p>#{project.price}</p>
              <p>#{project.place}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="projects-link">
        <Link
          to="/projects"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Voir toutes mes réalisations
        </Link>
      </div>
    </div>
  );
}

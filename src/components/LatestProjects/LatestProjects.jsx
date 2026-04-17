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

  if (loading) return <p className="projects-loading">Chargement…</p>;

  return (
    <section className="projects">
      {/* Titre */}
      <div className="projects-header">
        <h2>DERNIÈRES RÉALISATIONS</h2>
      </div>

      {/* Grille 2×2 style Stats */}
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
            <div className="project-overlay">
              <h3>{project.title}</h3>
              {project.place && <p className="overlay-place">{project.place}</p>}
              {project.price && <p className="overlay-price">{project.price}</p>}
            </div>
          </Link>
        ))}
      </div>

      {/* Lien bas */}
      <div className="projects-footer">
        <Link
          to="/projects"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="projects-link"
        >
          VOIR TOUTES MES RÉALISATIONS
        </Link>
      </div>
    </section>
  );
}

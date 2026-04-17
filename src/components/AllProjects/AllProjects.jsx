import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./allProjects.css";

export default function AllProjects() {
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

  if (loading) return <p className="all-projects-loading">Chargement…</p>;

  return (
    <div className="all-projects">
      <h1>RÉALISATIONS</h1>
      <div className="all-projects-grid">
        {projects.map((project, i) => (
          <Link
            key={project._id}
            to={`/projects/${project._id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="all-projects-card"
            style={{ "--index": i }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="all-projects-image"
            />
            <div className="all-projects-overlay">
              <h3>{project.title}</h3>
              {project.place && <p className="overlay-place">{project.place}</p>}
              {project.price && <p className="overlay-price">{project.price}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
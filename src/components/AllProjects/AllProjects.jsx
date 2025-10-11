import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Separator from "../Separator/Separator";
import "./allProjects.css";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://savinjessica-back.onrender.com/api/projects");
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

  if (loading) return <p>Chargement des projets...</p>;

  return (
    <div className="all-projects">

      <div className="all-projects-grid">
        {projects.map((project) => (
          <Link
            key={project._id}
            to={`/projects/${project._id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="all-projects-card"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="all-projects-image"
            />
            <div className="all-projects-hashtags">
              <p>#{project.customer}</p>
              <p>#{project.price}</p>
              <p>#{project.place}</p>
            </div>
          </Link>
        ))}
      </div>

      <Separator />
    </div>
  );
}

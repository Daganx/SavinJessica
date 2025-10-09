import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Separator from "../Separator/Separator";
import "./projectsDetails.css";

export default function ProjectsDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch du projet
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://savinjessica-back.onrender.com/api/projects/${id}`
        );
        if (!res.ok) throw new Error("Projet introuvable");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!project) return <h2>Projet introuvable</h2>;

  return (
    <>
      <section className="projects-details">
        <div className="carousel">
          {project.images && project.images.length > 0 ? (
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} - ${currentIndex + 1}`}
              className="carousel-image"
            />
          ) : (
            <p>Aucune image disponible</p>
          )}

          {/* Indicateurs carrés */}
          {project.images && (
            <div className="carousel-indicators">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
          )}
        </div>

        <div className="projects-text">
          <h1>{project.title}</h1>
          <ul>
            <li>Client: {project.customer}</li>
            <li>Année: {project.year}</li>
            <li>Prix: {project.price}</li>
            <li>Durée: {project.time}</li>
            <li>Lieu : {project.place}</li>
            <li>Besoin : {project.need}</li>
          </ul>
          <p className="projects-bio">Prestation : {project.prestation}</p>
          <p className="projects-bio">{project.description}</p>
        </div>
      </section>
      <Separator />
    </>
  );
}

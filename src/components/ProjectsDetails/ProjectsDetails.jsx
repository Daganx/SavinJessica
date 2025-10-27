import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Separator from "../Separator/Separator";
import "./projectsDetails.css";

export default function ProjectsDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="projects-details-container">
          {/* ---- Bloc Image ---- */}
          <div className="projects-details-image">
            {project.images && project.images.length > 0 ? (
              <>
                <img
                  src={project.images[currentIndex]}
                  alt={`${project.title} - ${currentIndex + 1}`}
                  className="main-image"
                  onClick={() => setIsModalOpen(true)} // ✅ ouvre la modale au clic
                />

                {/* Miniatures */}
                {project.images.length > 1 && (
                  <div className="thumbnail-list">
                    {project.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        className={`thumbnail ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p>Aucune image disponible</p>
            )}
          </div>

          {/* ---- Bloc Texte ---- */}
          <div className="projects-details-text">
            <h1>{project.title}</h1>
            <ul>
              <li>
                <strong>
                  <span className="bold">Client</span> :
                </strong>{" "}
                {project.customer}
              </li>
              <li>
                <strong>
                  <span className="bold">Année :</span>
                </strong>{" "}
                {project.year}
              </li>
              <li>
                <strong>
                  <span className="bold">Budget tout compris :</span>
                </strong>{" "}
                {project.price}
              </li>
              <li>
                <strong>
                  <span className="bold">Durée :</span>
                </strong>{" "}
                {project.time}
              </li>
              <li>
                <strong>
                  <span className="bold">Lieu :</span>
                </strong>{" "}
                {project.place}
              </li>
              <li>
                <strong>
                  <span className="bold">Besoin :</span>
                </strong>{" "}
                {project.need}
              </li>
            </ul>
            <p className="projects-bio">
              <strong>
                <span className="bold">Prestation</span> :
              </strong>{" "}
              {project.prestation}
            </p>
            <p className="projects-bio">{project.description}</p>
          </div>
        </div>
      </section>

      {/* ---- Modale ---- */}
      {isModalOpen && (
        <div className="image-modal" onClick={() => setIsModalOpen(false)}>
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} agrandie`}
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // ✅ empêche de fermer quand on clique sur l'image
          />
        </div>
      )}

      <Separator />
    </>
  );
}

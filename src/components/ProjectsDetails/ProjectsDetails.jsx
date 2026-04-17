import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
        <h1 className="projects-details-title">{project.title}</h1>
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
                        className={`thumbnail ${index === currentIndex ? "active" : ""
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

          <div className="projects-details-bio">
            <div className="bio-item">
              <span className="bio-label">Prestation</span>
              <p className="bio-text">{project.prestation}</p>
            </div>

            <div className="bio-item">
              <span className="bio-label">Description</span>
              <p className="bio-text">{project.description}</p>
            </div>
          </div>

          {/* ---- Bloc Texte ---- */}

          <div className="projects-details-grid">
            <div className="projects-details-cell">
              <span className="cell-label">Client</span>
              <span className="cell-value">{project.customer}</span>
            </div>
            <div className="projects-details-cell">
              <span className="cell-label">Année</span>
              <span className="cell-value">{project.year}</span>
            </div>
            <div className="projects-details-cell">
              <span className="cell-label">Budget</span>
              <span className="cell-value">{project.price}</span>
            </div>
            <div className="projects-details-cell">
              <span className="cell-label">Durée</span>
              <span className="cell-value">{project.time}</span>
            </div>
            <div className="projects-details-cell">
              <span className="cell-label">Lieu</span>
              <span className="cell-value">{project.place}</span>
            </div>
            <div className="projects-details-cell">
              <span className="cell-label">Besoin</span>
              <span className="cell-value">{project.need}</span>
            </div>
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
    </>
  );
}

import { useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../../data/projects";
import Separator from "../Separator/Separator";
import "./projectsDetails.css";

export default function ProjectsDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <>
      <section className="projects-details">
        <div className="carousel">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} - ${currentIndex + 1}`}
            className="carousel-image"
          />

          {/* Indicateurs carrés */}
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
        </div>

        <div className="projects-text">
          <h1>{project.title}</h1>
          <ul>
            <li>Prestation: {project.prestation}</li>
            <li>Client: {project.customer}</li>
            <li>Année: {project.year}</li>
            <li>Prix: {project.price}</li>
            <li>Durée: {project.time}</li>
            <li>Lieu : {project.place}</li>
            <li>Besoin : {project.besoin}</li>
          </ul>
          <p className="projects-bio">{project.description}</p>
        </div>
      </section>
      <Separator />
    </>
  );
}

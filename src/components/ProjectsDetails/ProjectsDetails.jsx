import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import Separator from "../Separator/Separator";
import "./projectsDetails.css";

export default function ProjectsDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <>
      <section className="projects-details">
        <img src={project.images[0]} alt={project.title} />
        <div className="projects-text">
          <h1>{project.title}</h1>
          <ul>
            <li>Prestation: {project.prestation}</li>
            <li>Client: {project.customer}</li>
            <li>Année: {project.year}</li>
            <li>Prix: {project.price}</li>
            <li>Durée: {project.time}</li>
          </ul>
          <p className="projects-bio">{project.description}</p>
        </div>
      </section>
      <Separator />
    </>
  );
}

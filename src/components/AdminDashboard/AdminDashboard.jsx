import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prestation: "",
    images: [],
    customer: "",
    year: "",
    price: "",
    time: "",
    need: "",
    place: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ================================
  // Fetch des projets
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://savinjessica-back.onrender.com/api/projects"
      );
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erreur lors du fetch des projets :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ================================
  // Upload images (single ou multiple)
  const handleFileUpload = async (e) => {
    const filesList = Array.from(e.target.files || []);
    if (!filesList.length) return;

    try {
      const token = localStorage.getItem("token");

      if (filesList.length === 1) {
        // cas simple: un fichier -> endpoint single
        const form = new FormData();
        form.append("image", filesList[0]);

        const res = await fetch(
          "https://savinjessica-back.onrender.com/api/projects/upload",
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: form,
          }
        );
        const data = await res.json();
        if (data.url) {
          setFormData((prev) => ({
            ...prev,
            images: [...prev.images, data.url],
          }));
        }
        return;
      }

      // plusieurs fichiers -> endpoint multiple
      const multiForm = new FormData();
      filesList.forEach((file) => multiForm.append("images", file));

      const res = await fetch(
        "https://savinjessica-back.onrender.com/api/projects/upload/multiple",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: multiForm,
        }
      );
      const data = await res.json();
      if (Array.isArray(data.urls) && data.urls.length) {
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, ...data.urls],
        }));
      }
    } catch (err) {
      console.error("Erreur upload :", err);
    }
  };

  // ================================
  // Suppression d'une image du formulaire (local)
  const handleRemoveImage = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  // ================================
  // Envoi du projet
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Vous devez être connecté");

      const url = editingId
        ? `https://savinjessica-back.onrender.com/api/projects/${editingId}`
        : "https://savinjessica-back.onrender.com/api/projects";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'ajout");

      setMessage(
        editingId
          ? "✅ Projet mis à jour avec succès !"
          : "✅ Projet ajouté avec succès !"
      );
      setFormData({
        title: "",
        description: "",
        prestation: "",
        images: [],
        customer: "",
        year: "",
        price: "",
        time: "",
        need: "",
        place: "",
      });
      setEditingId(null);
      await fetchProjects();
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  // ================================
  // Pré-remplir le formulaire pour édition
  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      prestation: project.prestation || "",
      images: Array.isArray(project.images) ? project.images : [],
      customer: project.customer || "",
      year: project.year || "",
      price: project.price || "",
      time: project.time || "",
      need: project.need || project.besoin || "",
      place: project.place || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================================
  // Supprimer un projet
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Supprimer ce projet ? Cette action est irréversible."
    );
    if (!confirmed) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Vous devez être connecté");
      const res = await fetch(
        `https://savinjessica-back.onrender.com/api/projects/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Erreur lors de la suppression");
      setMessage("🗑️ Projet supprimé");
      await fetchProjects();
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  // ================================
  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Dashboard Admin</h2>
        <button onClick={handleLogout} className="btn btn--danger">
          Déconnexion
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          name="title"
          placeholder="Titre"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <textarea
          name="prestation"
          placeholder="Prestation"
          value={formData.prestation}
          onChange={(e) =>
            setFormData({ ...formData, prestation: e.target.value })
          }
        />
        <input
          name="customer"
          placeholder="Client"
          value={formData.customer}
          onChange={(e) =>
            setFormData({ ...formData, customer: e.target.value })
          }
        />
        <input
          name="year"
          placeholder="Année"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        <input
          name="price"
          placeholder="Prix"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          name="time"
          placeholder="Durée"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <input
          name="need"
          placeholder="Besoin"
          value={formData.need}
          onChange={(e) => setFormData({ ...formData, need: e.target.value })}
        />
        <input
          name="place"
          placeholder="Lieu"
          value={formData.place}
          onChange={(e) => setFormData({ ...formData, place: e.target.value })}
        />

        {/* Upload images */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
        />

        {/* Preview des images avec suppression */}
        <div className="images-preview">
          {formData.images.map((img, i) => (
            <div key={i} className="image-item">
              <img src={img} alt={`preview-${i}`} width="100" height="70" />
              <button
                type="button"
                onClick={() => handleRemoveImage(i)}
                aria-label={`Supprimer l'image ${i + 1}`}
                title="Supprimer"
                className="remove-image-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn submit-btn">
          {editingId ? "Mettre à jour le projet" : "Ajouter projet"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({
                title: "",
                description: "",
                prestation: "",
                images: [],
                customer: "",
                year: "",
                price: "",
                time: "",
                need: "",
                place: "",
              });
            }}
            className="btn cancel-edit-btn"
          >
            Annuler l'édition
          </button>
        )}
      </form>

      <hr className="separator-line" />

      <h3>Vos projets</h3>
      {loading ? (
        <p>Chargement…</p>
      ) : projects.length === 0 ? (
        <p>Aucun projet pour le moment.</p>
      ) : (
        <div className="projects-list">
          {projects.map((p) => (
            <div key={p._id} className="project-card-admin">
              <div className="project-info">
                <div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-meta">
                    {p.customer} • {p.year} • {p.place}
                  </div>
                </div>
              </div>
              <div className="project-actions">
                <button className="btn" onClick={() => handleEdit(p)}>
                  Modifier
                </button>
                <button
                  className="btn btn--danger"
                  onClick={() => handleDelete(p._id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

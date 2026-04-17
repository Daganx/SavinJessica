import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
        <div className="form-field">
          <label htmlFor="title">Titre</label>
          <input
            id="title"
            name="title"
            placeholder="Titre du projet"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description du projet"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="prestation">Prestation</label>
          <textarea
            id="prestation"
            name="prestation"
            placeholder="Prestation"
            value={formData.prestation}
            onChange={(e) =>
              setFormData({ ...formData, prestation: e.target.value })
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="customer">Client</label>
          <input
            id="customer"
            name="customer"
            placeholder="Nom du client"
            value={formData.customer}
            onChange={(e) =>
              setFormData({ ...formData, customer: e.target.value })
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="year">Année</label>
          <input
            id="year"
            name="year"
            placeholder="2024"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Prix</label>
          <input
            id="price"
            name="price"
            placeholder="Budget"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">Durée</label>
          <input
            id="time"
            name="time"
            placeholder="Durée du projet"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="need">Besoin</label>
          <input
            id="need"
            name="need"
            placeholder="Besoin du client"
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="place">Lieu</label>
          <input
            id="place"
            name="place"
            placeholder="Localisation"
            value={formData.place}
            onChange={(e) => setFormData({ ...formData, place: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label>Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
          />
          {formData.images.length > 0 && (
            <div className="images-preview">
              {formData.images.map((img, i) => (
                <div key={i} className="image-item">
                  <img src={img} alt={`preview-${i}`} />
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
          )}
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
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="btn preview-toggle-btn"
        >
          {showPreview ? "Masquer la prévisualisation" : "Aperçu du projet"}
        </button>
      </form>

      {showPreview && formData.title && (
        <div className="project-preview">
          <h4 className="preview-title">Aperçu</h4>
          <div className="preview-image">
            {formData.images.length > 0 ? (
              <>
                <img
                  src={formData.images[currentImageIndex]}
                  alt={`Preview ${currentImageIndex + 1}`}
                  className="preview-main-image"
                />
                {formData.images.length > 1 && (
                  <div className="preview-thumbnails">
                    {formData.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className={`preview-thumbnail ${i === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(i)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="preview-no-image">Aucune image</div>
            )}
          </div>
          <div className="preview-content">
            <h1 className="preview-project-title">{formData.title}</h1>
            <div className="preview-grid">
              {formData.customer && (
                <div className="preview-cell">
                  <span className="cell-label">Client</span>
                  <span className="cell-value">{formData.customer}</span>
                </div>
              )}
              {formData.year && (
                <div className="preview-cell">
                  <span className="cell-label">Année</span>
                  <span className="cell-value">{formData.year}</span>
                </div>
              )}
              {formData.price && (
                <div className="preview-cell">
                  <span className="cell-label">Budget</span>
                  <span className="cell-value">{formData.price}</span>
                </div>
              )}
              {formData.time && (
                <div className="preview-cell">
                  <span className="cell-label">Durée</span>
                  <span className="cell-value">{formData.time}</span>
                </div>
              )}
              {formData.place && (
                <div className="preview-cell">
                  <span className="cell-label">Lieu</span>
                  <span className="cell-value">{formData.place}</span>
                </div>
              )}
              {formData.need && (
                <div className="preview-cell">
                  <span className="cell-label">Besoin</span>
                  <span className="cell-value">{formData.need}</span>
                </div>
              )}
            </div>
            {formData.prestation && (
              <div className="preview-bio">
                <span className="bio-label">Prestation</span>
                <p>{formData.prestation}</p>
              </div>
            )}
            {formData.description && (
              <p className="preview-description">{formData.description}</p>
            )}
          </div>
        </div>
      )}

      <section className="projects-section">
        <h3>Vos projets</h3>
        {loading ? (
          <p className="projects-loading">Chargement…</p>
        ) : projects.length === 0 ? (
          <p className="projects-empty">Aucun projet pour le moment.</p>
        ) : (
          <div className="projects-list">
            {projects.map((p) => (
              <div key={p._id} className="project-card-admin">
                <div className="project-info">
                  <div className="project-title">{p.title}</div>
                  <div className="project-meta">
                    {p.customer} • {p.year} • {p.place}
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
      </section>
    </div>
  );
}

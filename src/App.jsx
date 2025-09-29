import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectsDetails from "./components/ProjectsDetails/ProjectsDetails"
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/Contact/ContactPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

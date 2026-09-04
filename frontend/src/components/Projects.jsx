import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load projects");
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <p className="projects-intro">
          A selection of projects where I applied my skills to build
          practical web applications.
        </p>

        <div className="projects-grid">

          {loading && <p>Loading projects...</p>}

          {error && <p>{error}</p>}

          {!loading &&
            !error &&
            projects.map((project) => (
              <div className="project-card" key={project.id}>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.split(",").map((technology) => (
                    <span className="project-tag" key={technology}>
                      {technology.trim()}
                    </span>
                  ))}
                </div>

              </div>
            ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
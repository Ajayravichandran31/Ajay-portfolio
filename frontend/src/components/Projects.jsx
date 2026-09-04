function Projects() {
  const projects = [
    {
      title: "Farmer To Consumer",
      description:
        "A web application designed to connect farmers directly with consumers and make product purchasing easier.",
      technologies: ["React", "Spring Boot", "MySQL", "REST API"],
    },
    {
      title: "Automatic Queue Management System",
      description:
        "A web-based system designed to manage queues and improve the process of handling users efficiently.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Student Management System",
      description:
        "A web application for managing student records with CRUD operations through REST APIs.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Postman"],
    },
  ];

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

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="project-tag" key={technology}>
                    {technology}
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